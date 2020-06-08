// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import Dexie from 'dexie'

// TIPOS
import { Document } from 'prismic-javascript/d.ts/documents'
import PrismicClient from 'prismic-configuration'

// DB DE POSTS
interface IPostsDB {
	post: Document
	uid: string
}

// DB DE USUARIOS
interface IUsersDB {
	users: any
	id: number
}

// DB DE COMENTARIOS
interface ICommentsDB {
	comments: any
	id: number
}

export class LocalDB extends Dexie {
	// DECLARAR TABLAS
	posts: Dexie.Table<IPostsDB, string>
	users: Dexie.Table<IUsersDB, number>
	comments: Dexie.Table<ICommentsDB, number>

	// CONSTRUCTOR
	constructor() {
		super('localDB')

		// CREAR STORES
		this.version(1).stores({
			posts: 'uid, post',
			users: 'id, users',
			comments: 'id, comments',
		})

		// CREAR TABLAS
		this.posts = this.table('posts')
		this.users = this.table('users')
		this.comments = this.table('comments')
	}
}

// INSTANCIA DE BASE DE DATOS
const iLocalDB = new LocalDB()

export const initDB = () => iLocalDB.open()

// ACCIONES EN BASE LOCAL
// LIMPIAR POSTS
export const clearDocs = async () => iLocalDB.posts.clear()

// AGREGAR TODOS LOS POSTS
export const setDocs = async (posts: Document[]) => {
	// MAPEAR POSTS DE DOCUMENT[]
	const postsDB: IPostsDB[] = posts.map((doc: Document) => {
		return {
			uid: doc.uid || '',
			post: doc,
		}
	})

	// GUARDAR
	iLocalDB.posts.bulkPut(postsDB)
}

// AGREGAR POST A LOCAL
export const pushDoc = async (post: Document, uid: string) => iLocalDB.posts.put({ uid, post })

// LEER DE LOCAL
export const getPosts = async () => iLocalDB.posts.toArray()

// LEER UN POST
export const getPost = async (uid: string) => iLocalDB.posts.get(uid)

export const usePrismicData = async (inferUID: string | boolean, prevPost?: Document) => {
	// OBTENER UID DE NAVEGADOR
	const uid: string =
		typeof inferUID === 'string'
			? inferUID
			: location.pathname.substr(location.pathname.lastIndexOf('/') + 1)

	// VERIFICAR SI HAY CONEXION
	if (window.navigator.onLine) {
		const doc: Document | undefined = prevPost || (await PrismicClient.getByUID('post', uid, {}))

		// GUARDAR EN BASE LOCAL
		await pushDoc(doc, uid)

		// RETORNAR POST
		return doc
	}

	// SINO RETORNAR DEL LOCAL
	else {
		// OBTENER DEL LOCAL Y RETORNAR
		const doc: IPostsDB | undefined = await getPost(uid)
		return doc?.post
	}
}

export default IPostsDB
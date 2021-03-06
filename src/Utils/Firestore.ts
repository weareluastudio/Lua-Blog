// INSTANCIA DE FIREBASE Y BASE DE DATOS LOCAL
import firebase from 'Keys/Firebase'

// FIRESTORE
import 'firebase/firestore'

// INSTANCIA
export const db: firebase.firestore.Firestore = firebase.firestore()

// ENVIAR TOKEN A LA DB
export const sendToken = async (token: string) => {
	const tokens = await db.collection('tokens')
	return tokens.add({ upload: new Date().toUTCString(), token })
}

// OBTENER POSTS MAS POPULARES
export const getSortPopular = async (posts: IPostItem[]) => {
	// OBTENER DOCUMENTOS
	const docLikes = (await db.collection('likes').get()).docs

	// OBTENER IDS
	const docUID: string[] = docLikes
		.sort((a, b) => {
			// DOCUMENTOS
			const aTmp = a.data() as LikeDoc
			const bTmp = b.data() as LikeDoc

			// OBTENER PROMEDIOS
			const aAvrg = aTmp.count.reduce((aV, bV) => aV + bV) / aTmp.count.length
			const bAvrg = bTmp.count.reduce((aV, bV) => aV + bV) / bTmp.count.length

			// ORDENAR PROMEDIOS
			return bAvrg - aAvrg
		})
		.map(doc => doc.id)

	// OBTENER DOCUMENTOS CON LIKES
	// @ts-ignore
	const pointedDocs: IPostItem[] = posts
		.map((_postI: IPostItem, index: number) => {
			// DOC TEMPORAL
			let tmpDoc: IPostItem | undefined

			// RECORRER IDS
			posts.forEach((sPost: IPostItem) => {
				if (docUID[index] && sPost.url === docUID[index]) tmpDoc = sPost
			})

			// RETORNAR DOC
			return tmpDoc
		})
		.filter(Boolean)

	// ORDENAR
	return pointedDocs
}

// GUARDAR LIKES
export const saveLikes = async (uid: string, lCount: number) => {
	// OBTENER LIKES DE DOCUMENTO
	const likes = (await db
		.collection('likes')
		.doc(uid)
		.get()).data()

	// VERIFICAR SI EXISTEN LIKES
	let tmpCount: number[] = [lCount]

	if (likes) {
		// OBTENER CONTADORES
		const lDoc: LikeDoc = likes as LikeDoc

		// ASIGNAR NUEVO CONTADOR
		tmpCount = lDoc.count

		// AUMENTAR CONTADOR
		tmpCount.push(lCount)
	}

	return db
		.collection('likes')
		.doc(uid)
		.set({ count: tmpCount })
}

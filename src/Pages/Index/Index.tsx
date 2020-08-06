import ClipSkeleton from 'Components/ClipSkeleton/ClipSkeleton'
import MainContext from 'Context/MainContext'
import Meta from 'Components/Meta/Meta'
import PostCard from 'Components/PostCard/PostCard'
import SearchCard from 'Components/SearchCard/SearchCard'
import React, { ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { ChevronDown } from 'react-feather'

import Styles from './Index.module.scss'

// ESTADO
interface IndexState {
	posts: IPostItem[] | null
	popular: IPostItem[] | null
	notSort: boolean
}

// ESTADO INICIAL
const DefState: IndexState = {
	posts: null,
	popular: null,
	notSort: true,
}

const Index: React.FC = () => {
	// CONTEXTO
	const { lang, posts } = useContext(MainContext)

	// ESTADO
	DefState.posts = posts
	const [postsState, setPosts]: [IndexState, Dispatch<SetStateAction<IndexState>>] = useState(
		DefState
	)

	// GUARDAR DOCS EN LOCAL DB
	useEffect(() => {
		import('Utils/LocalDB').then(({ getPosts, saveDocs }) => {
			// GUARDAR POSTS
			saveDocs(posts)

			// CARGAR DESDE INDEXED DB
			if (!posts || !window.navigator.onLine) {
				getPosts().then((iPost: IPostsDB[]) => {
					setPosts((prevState: IndexState) => ({
						...prevState,
						posts: iPost.map((post: IPostsDB) => post.post),
					}))
				})
			}
		})
	}, [posts])

	useEffect(() => {
		// OBTENER DOCUMENTOS DESTACADOS
		import('Utils/Firebase').then(({ getSortPopular }) =>
			getSortPopular(posts).then((popular: IPostItem[]) =>
				setPosts((prevState: IndexState) => ({ ...prevState, popular }))
			)
		)
	}, [posts])

	// CAMBIAR ENTRE DESTACADOS Y RECIENTES
	const changeDocs = (ev: ChangeEvent<HTMLSelectElement>) => {
		// SELECCIONAR INPUT
		const select: HTMLSelectElement = ev.target as HTMLSelectElement
		const index: number = select.selectedIndex

		// CAMBIAR ESTADO
		setPosts((prevState: IndexState) => ({ ...prevState, notSort: index === 0 }))
	}

	return (
		<section className={`${Styles.page} home`}>
			<Meta
				title={lang.general.title}
				desc='Creamos experiencias digitales e integramos tecnología escalable de alto rendimiento con el objetivo de acelerar el crecimiento de negocios, empresas y startups al rededor del mundo.'
				banner=''
				url=''
				keys={'Diseño web, E-commerce, Apps móviles, Inteligencia Artificial, Consultoría IT, Software, Estudio de Desarrollo'.split(
					', '
				)}
			/>
			{postsState.posts && (
				<div className={Styles.homeContainer}>
					<div className={Styles.selectPost}>
						<select onChange={changeDocs} id='selectPost' aria-label='Order posts'>
							<option>{lang.index.postTitle}</option>
							<option>{lang.index.postTitle_2}</option>
						</select>
						<label
							htmlFor='selectPost'
							id='downIcon'
							style={{ left: `${postsState.notSort ? '-25px' : '0px'}` }}
							className={Styles.selectIcon}>
							<ChevronDown color='var(--primary)' />
						</label>
					</div>

					{postsState.posts && (
						<div className={Styles.postsList}>
							{postsState.posts &&
								(postsState.notSort
									? postsState.posts
									: postsState.popular || postsState.posts
								).map((post: IPostItem, key: number) => <PostCard key={key} post={post} />)}
						</div>
					)}

					<div>
						<div className={`${Styles.postClip} ${Styles.postRecent}`}>
							<h2>{lang.index.postTitle}</h2>
							{postsState.posts.map((post: IPostItem, key: number) => {
								if (key < 3) return <SearchCard key={key} post={post} />
								else return null
							})}
						</div>

						{postsState.popular ? (
							<div className={`${Styles.bestPosts} ${Styles.postClip}`}>
								<h2>{lang.index.postTitle_2}</h2>
								{postsState.popular.map((post: IPostItem, key: number) => {
									if (key < 3) return <SearchCard key={key} post={post} />
									else return null
								})}
							</div>
						) : (
							<ClipSkeleton />
						)}
					</div>
				</div>
			)}
		</section>
	)
}

export default Index
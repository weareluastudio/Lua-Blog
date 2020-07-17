// HOOKS
import { useEffect } from 'react'

// COMPONENTES
import Layout from 'layout/Layout'

// APP
import { AppProps } from 'next/app'

// BASE LOCAL Y HERRAMIENTAS
import { initDB } from 'utils/LocalDB'
import { updateApp } from 'utils/Tools'

const BlogApp = ({ Component, pageProps, router }: AppProps) => {
	useEffect(() => {
		// INICIAR BASE DE DATOS LOCAL
		initDB()

		// ACTUALIZAR APP
		updateApp()
	}, [])

	// COMPONENTE
	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
			<style jsx global>{`
				/* GENERALES */
				@font-face {
					src: url('/fonts/Futura-Book.ttf');
					font-family: 'Futura';
					font-display: block;
					font-weight: 300;
				}

				@font-face {
					src: url('/fonts/Futura-Medium.ttf');
					font-family: 'Futura';
					font-display: block;
					font-weight: 400;
				}

				@font-face {
					src: url('/fonts/OpenSans-Light.ttf');
					font-family: 'OpenSans';
					font-display: block;
					font-weight: 200;
				}

				@font-face {
					src: url('/fonts/OpenSans-Regular.ttf');
					font-family: 'OpenSans';
					font-display: block;
					font-weight: 300;
				}

				@font-face {
					src: url('/fonts/OpenSans-SemiBold.ttf');
					font-family: 'OpenSans';
					font-display: block;
					font-weight: 400;
				}

				@font-face {
					src: url('/fonts/OpenSans-Bold.ttf');
					font-family: 'OpenSans';
					font-display: block;
					font-weight: 500;
				}

				@font-face {
					src: url('/fonts/OpenSans-ExtraBold.ttf');
					font-family: 'OpenSans';
					font-display: block;
					font-weight: 600;
				}

				@font-face {
					src: url('/fonts/Manrope-Light.ttf');
					font-family: 'Manrope';
					font-display: block;
					font-weight: 200;
				}

				@font-face {
					src: url('/fonts/Manrope-Medium.ttf');
					font-family: 'Manrope';
					font-display: block;
					font-weight: 300;
				}

				@font-face {
					src: url('/fonts/Manrope-Regular.ttf');
					font-family: 'Manrope';
					font-display: block;
					font-weight: 400;
				}

				@font-face {
					src: url('/fonts/Manrope-Bold.ttf');
					font-family: 'Manrope';
					font-display: block;
					font-weight: 500;
				}

				@font-face {
					src: url('/fonts/Manrope-ExtraBold.ttf');
					font-family: 'Manrope';
					font-display: block;
					font-weight: 600;
				}

				body {
					--pink: #e60f71;
					--purple: #9c27b0;
					--deepBlue:  #160f30;
					--blue: #2196f3;
					--deepOrange: #ff5722;
					--mainBackground: #160f30;
					--postText: #fff;
					--postContent: #160f30;
					--postMain: rgba(245, 245, 245, 0.7);
					--postPhrase: #eee;
					--postPhraseBold: #fff;
					--navbarBackground: #160f30;
					--categoryBackground: #221a41;
					--wavesColor: #2d2644;
					--navCTA: #e60f71;
					--shadow: rgba(0, 0, 0, 0.4);
					--navHeight: 95px;
					background: var(--mainBackground);
					transition: background 0.3s ease-in-out;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
						'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					font-size: 15px;
					overflow-x: hidden;
					line-height: 1;
				}

				* {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
					user-select: none;
					-webkit-user-drag: none;
					font-weight: 300;
					font-family: 'OpenSans';
				}

				body main {
					display: block;
					position: relative;
					width: 100%;
					margin-top: var(--navHeight);
				}

				::-moz-progress-bar {
					background-color: var(--deepOrange);
				}

				::-webkit-progress-value {
					background-color: var(--deepOrange);
				}

				::-webkit-progress-bar {
					background-color: transparent;
				}

				progress {
					-webkit-appearance: none;
				}

				a {
					text-decoration: none;
				}

				ul,
				ol {
					list-style: none;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-weight: 500;
					font-family: 'OpenSans';
				}

				p {
					font-weight: 300;
					font-family: 'OpenSans';
				}

				.darkGist{
					filter: saturate(200%) invert(90%);
				}

				.lightGist{
					filter: none;
				}

				/* BOTONES */

				.btn {
					appearance: none;
					border: none;
					outline: none;
					cursor: pointer;
					font-size: 1em;
					color: var(--white);
					border-radius: 10px;
					box-shadow: 3px 3px 10px var(--shadow);
					width: 160px;
					height: 45px;
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
				}

				button {
					appearance: none;
					border: none;
					outline: none;
					cursor: pointer;
					font-size: 1em;
					color: var(--white);
					border-radius: 10px;
					box-shadow: 3px 3px 10px var(--shadow);
					width: 160px;
					height: 45px;
				}

				.toast {
					position: fixed;
					bottom: 0;
					left: 0;
					width: 100%;
					transform: translateY(100%);
					transition: transform 0.3s ease-in-out;
					background: #333;
					padding: 20px;
					z-index: 99;
				}

				.toast > span {
					font-size: 1em;
					color: #fff;
					font-weight: 600;
					font-family: 'OpenSans';
				}

				@keyframes show {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				.alertContainer {
					width: 100%;
					height: 100vh;
					position: fixed;
					min-width: 100%;
					top: 0;
					left: 0;
					z-index: 100;
					animation: show 0.4s ease-in-out 1;
					transition: opacity 0.4s ease-in-out;
					font-size: 14px;
				}

				.alertContainer > .alertShadow {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: rgba(0, 0, 0, 0.5);
					z-index: 1;
				}

				.alertContainer .alertContent {
					position: absolute;
					top: 50%;
					left: 50%;
					padding: 30px;
					width: calc(100% - 40px);
					max-width: 450px;
					transform: translate(-50%, -50%);
					background: var(--navbarBackground);
					z-index: 2;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
					border-radius: 10px;
					font-family: 'OpenSans';
				}

				.alertContainer .alertActions {
					display: flex;
					justify-content: flex-end;
					position: relative;
					z-index: 3;
				}

				.alertContainer .alertActions li .cancelBtn {
					color: var(--postText);
					background: transparent;
					box-shadow: none;
					display: none;
				}

				.alertContainer .alertActions li button {
					color: #fff;
					width: 100px;
					background: var(--deepOrange);
					box-shadow: none;
					overflow: hidden;
					font-family: 'OpenSans';
				}

				.alertContainer .alertContent h1 {
					color: var(--postText);
					font-size: 2em;
					margin-bottom: 10px;
					font-weight: 600;
					font-family: 'OpenSans';
				}

				.alertContainer .alertContent p {
					color: var(--postText);
					margin-bottom: 20px;
					font-size: 1em;
					line-height: 20px;
					font-family: 'OpenSans';
				}

				@media screen and (max-width: 965px) {
					body {
						font-size: 14px;
					}
				}

				@media screen and (max-width: 760px) {
					body {
						font-size: 13px;
					}
				}

				@media screen and (max-width: 460px) {
					body {
						font-size: 12px;
					}
					body > div {
						width: 100%;
					}
					body main {
						overflow: hidden;
						border-radius: 0;
					}
				}

				@font-face {
					font-family: lineicons;
					src: url('/fonts/LineIcons.woff2') format('woff2');
					font-weight: 400;
					font-style: normal;
					font-display: block;
				}

				.lni {
					display: inline-block;
					font: normal normal normal 1em/1 'LineIcons';
					speak: none;
					text-transform: none;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}

				.lni-sm {
					font-size: 0.8em;
				}

				.lni-lg {
					font-size: 1.2em;
				}

				.lni-16 {
					font-size: 16px;
				}

				.lni-32 {
					font-size: 32px;
				}

				.lni-bg-square,
				.lni-bg-circle {
					padding: 0.35em;
					background-color: #eee;
				}

				.lni-bg-circle {
					border-radius: 50%;
				}

				.lni-ul {
					padding-left: 0;
					list-style-type: none;
				}

				.lni-ul > li {
					display: flex;
					align-items: flex-start;
					line-height: 1.4;
				}

				.lni-ul > li > .lni {
					margin-right: 0.4em;
					line-height: inherit;
				}

				.lni-is-spinning {
					-webkit-animation: lni-spin 2s infinite linear;
					-moz-animation: lni-spin 2s infinite linear;
					animation: lni-spin 2s infinite linear;
				}

				@-webkit-keyframes lni-spin {
					0% {
						-webkit-transform: rotate(0deg);
					}
					100% {
						-webkit-transform: rotate(360deg);
					}
				}

				@-moz-keyframes lni-spin {
					0% {
						-moz-transform: rotate(0deg);
					}
					100% {
						-moz-transform: rotate(360deg);
					}
				}

				@keyframes lni-spin {
					0% {
						-webkit-transform: rotate(0deg);
						-moz-transform: rotate(0deg);
						-ms-transform: rotate(0deg);
						-o-transform: rotate(0deg);
						transform: rotate(0deg);
					}
					100% {
						-webkit-transform: rotate(360deg);
						-moz-transform: rotate(360deg);
						-ms-transform: rotate(360deg);
						-o-transform: rotate(360deg);
						transform: rotate(360deg);
					}
				}

				.lni-rotate-90 {
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
					-webkit-transform: rotate(90deg);
					-moz-transform: rotate(90deg);
					-ms-transform: rotate(90deg);
					-o-transform: rotate(90deg);
					transform: rotate(90deg);
				}

				.lni-rotate-180 {
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
					-webkit-transform: rotate(180deg);
					-moz-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
					-o-transform: rotate(180deg);
					transform: rotate(180deg);
				}

				.lni-rotate-270 {
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
					-webkit-transform: rotate(270deg);
					-moz-transform: rotate(270deg);
					-ms-transform: rotate(270deg);
					-o-transform: rotate(270deg);
					transform: rotate(270deg);
				}

				.lni-flip-y {
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
					-webkit-transform: scale(-1, 1);
					-moz-transform: scale(-1, 1);
					-ms-transform: scale(-1, 1);
					-o-transform: scale(-1, 1);
					transform: scale(-1, 1);
				}

				.lni-flip-x {
					filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
					-webkit-transform: scale(1, -1);
					-moz-transform: scale(1, -1);
					-ms-transform: scale(1, -1);
					-o-transform: scale(1, -1);
					transform: scale(1, -1);
				}

				.lni-500px::before {
					content: '\ea02';
				}

				.lni-add-files::before {
					content: '\ea03';
				}

				.lni-alarm-clock::before {
					content: '\ea04';
				}

				.lni-alarm::before {
					content: '\ea05';
				}

				.lni-airbnb::before {
					content: '\ea06';
				}

				.lni-adobe::before {
					content: '\ea07';
				}

				.lni-amazon-pay::before {
					content: '\ea08';
				}

				.lni-amazon::before {
					content: '\ea09';
				}

				.lni-amex::before {
					content: '\ea0a';
				}

				.lni-anchor::before {
					content: '\ea0b';
				}

				.lni-amazon-original::before {
					content: '\ea0c';
				}

				.lni-android-original::before {
					content: '\ea0d';
				}

				.lni-android::before {
					content: '\ea0e';
				}

				.lni-angellist::before {
					content: '\ea0f';
				}

				.lni-angle-double-down::before {
					content: '\ea10';
				}

				.lni-angle-double-left::before {
					content: '\ea11';
				}

				.lni-angle-double-right::before {
					content: '\ea12';
				}

				.lni-angle-double-up::before {
					content: '\ea13';
				}

				.lni-angular::before {
					content: '\ea14';
				}

				.lni-apartment::before {
					content: '\ea15';
				}

				.lni-app-store::before {
					content: '\ea16';
				}

				.lni-apple-pay::before {
					content: '\ea17';
				}

				.lni-apple::before {
					content: '\ea18';
				}

				.lni-archive::before {
					content: '\ea19';
				}

				.lni-arrow-down-circle::before {
					content: '\ea1a';
				}

				.lni-arrow-left-circle::before {
					content: '\ea1b';
				}

				.lni-arrow-left::before {
					content: '\ea1c';
				}

				.lni-arrow-right-circle::before {
					content: '\ea1d';
				}

				.lni-arrow-right::before {
					content: '\ea1e';
				}

				.lni-arrow-top-left::before {
					content: '\ea1f';
				}

				.lni-arrow-top-right::before {
					content: '\ea20';
				}

				.lni-arrow-up-circle::before {
					content: '\ea21';
				}

				.lni-arrow-up::before {
					content: '\ea22';
				}

				.lni-arrows-horizontal::before {
					content: '\ea23';
				}

				.lni-arrows-vertical::before {
					content: '\ea24';
				}

				.lni-atlassian::before {
					content: '\ea25';
				}

				.lni-aws::before {
					content: '\ea26';
				}

				.lni-arrow-down::before {
					content: '\ea27';
				}

				.lni-ambulance::before {
					content: '\ea28';
				}

				.lni-agenda::before {
					content: '\ea29';
				}

				.lni-backward::before {
					content: '\ea2a';
				}

				.lni-baloon::before {
					content: '\ea2b';
				}

				.lni-ban::before {
					content: '\ea2c';
				}

				.lni-bar-chart::before {
					content: '\ea2d';
				}

				.lni-behance-original::before {
					content: '\ea2e';
				}

				.lni-bitbucket::before {
					content: '\ea2f';
				}

				.lni-bitcoin::before {
					content: '\ea30';
				}

				.lni-blackboard::before {
					content: '\ea31';
				}

				.lni-blogger::before {
					content: '\ea32';
				}

				.lni-bluetooth::before {
					content: '\ea33';
				}

				.lni-bold::before {
					content: '\ea34';
				}

				.lni-bolt-alt::before {
					content: '\ea35';
				}

				.lni-bolt::before {
					content: '\ea36';
				}

				.lni-book::before {
					content: '\ea37';
				}

				.lni-bookmark-alt::before {
					content: '\ea38';
				}

				.lni-bookmark::before {
					content: '\ea39';
				}

				.lni-bootstrap::before {
					content: '\ea3a';
				}

				.lni-bricks::before {
					content: '\ea3b';
				}

				.lni-bridge::before {
					content: '\ea3c';
				}

				.lni-briefcase::before {
					content: '\ea3d';
				}

				.lni-brush-alt::before {
					content: '\ea3e';
				}

				.lni-brush::before {
					content: '\ea3f';
				}

				.lni-bubble::before {
					content: '\ea40';
				}

				.lni-bug::before {
					content: '\ea41';
				}

				.lni-bulb::before {
					content: '\ea42';
				}

				.lni-bullhorn::before {
					content: '\ea43';
				}

				.lni-burger::before {
					content: '\ea44';
				}

				.lni-bus::before {
					content: '\ea45';
				}

				.lni-cake::before {
					content: '\ea46';
				}

				.lni-calculator::before {
					content: '\ea47';
				}

				.lni-calendar::before {
					content: '\ea48';
				}

				.lni-camera::before {
					content: '\ea49';
				}

				.lni-candy-cane::before {
					content: '\ea4a';
				}

				.lni-candy::before {
					content: '\ea4b';
				}

				.lni-capsule::before {
					content: '\ea4c';
				}

				.lni-car-alt::before {
					content: '\ea4d';
				}

				.lni-car::before {
					content: '\ea4e';
				}

				.lni-caravan::before {
					content: '\ea4f';
				}

				.lni-cart-full::before {
					content: '\ea50';
				}

				.lni-cart::before {
					content: '\ea51';
				}

				.lni-certificate::before {
					content: '\ea52';
				}

				.lni-checkbox::before {
					content: '\ea53';
				}

				.lni-checkmark-circle::before {
					content: '\ea54';
				}

				.lni-checkmark::before {
					content: '\ea55';
				}

				.lni-chef-hat::before {
					content: '\ea56';
				}

				.lni-chevron-down-circle::before {
					content: '\ea57';
				}

				.lni-chevron-down::before {
					content: '\ea58';
				}

				.lni-chevron-left-circle::before {
					content: '\ea59';
				}

				.lni-chevron-left::before {
					content: '\ea5a';
				}

				.lni-chevron-right-circle::before {
					content: '\ea5b';
				}

				.lni-chevron-right::before {
					content: '\ea5c';
				}

				.lni-chevron-up-circle::before {
					content: '\ea5d';
				}

				.lni-chevron-up::before {
					content: '\ea5e';
				}

				.lni-chrome::before {
					content: '\ea5f';
				}

				.lni-circle-minus::before {
					content: '\ea60';
				}

				.lni-circle-plus::before {
					content: '\ea61';
				}

				.lni-clipboard::before {
					content: '\ea62';
				}

				.lni-close::before {
					content: '\ea63';
				}

				.lni-cloud-check::before {
					content: '\ea64';
				}

				.lni-cloud-download::before {
					content: '\ea65';
				}

				.lni-cloud-network::before {
					content: '\ea66';
				}

				.lni-cloud-sync::before {
					content: '\ea67';
				}

				.lni-cloud-upload::before {
					content: '\ea68';
				}

				.lni-cloud::before {
					content: '\ea69';
				}

				.lni-cloudy-sun::before {
					content: '\ea6a';
				}

				.lni-code-alt::before {
					content: '\ea6b';
				}

				.lni-code::before {
					content: '\ea6c';
				}

				.lni-codepen::before {
					content: '\ea6d';
				}

				.lni-coffee-cup::before {
					content: '\ea6e';
				}

				.lni-cog::before {
					content: '\ea6f';
				}

				.lni-cogs::before {
					content: '\ea70';
				}

				.lni-coin::before {
					content: '\ea71';
				}

				.lni-comments-alt::before {
					content: '\ea72';
				}

				.lni-comments-reply::before {
					content: '\ea73';
				}

				.lni-comments::before {
					content: '\ea74';
				}

				.lni-compass::before {
					content: '\ea75';
				}

				.lni-construction-hammer::before {
					content: '\ea76';
				}

				.lni-construction::before {
					content: '\ea77';
				}

				.lni-consulting::before {
					content: '\ea78';
				}

				.lni-control-panel::before {
					content: '\ea79';
				}

				.lni-cpanel::before {
					content: '\ea7a';
				}

				.lni-creative-commons::before {
					content: '\ea7b';
				}

				.lni-credit-cards::before {
					content: '\ea7c';
				}

				.lni-crop::before {
					content: '\ea7d';
				}

				.lni-cross-circle::before {
					content: '\ea7e';
				}

				.lni-crown::before {
					content: '\ea7f';
				}

				.lni-css3::before {
					content: '\ea80';
				}

				.lni-cup::before {
					content: '\ea81';
				}

				.lni-customer::before {
					content: '\ea82';
				}

				.lni-cut::before {
					content: '\ea83';
				}

				.lni-dashboard::before {
					content: '\ea84';
				}

				.lni-database::before {
					content: '\ea85';
				}

				.lni-delivery::before {
					content: '\ea86';
				}

				.lni-dev::before {
					content: '\ea87';
				}

				.lni-diamond-alt::before {
					content: '\ea88';
				}

				.lni-diamond::before {
					content: '\ea89';
				}

				.lni-diners-club::before {
					content: '\ea8a';
				}

				.lni-dinner::before {
					content: '\ea8b';
				}

				.lni-direction-alt::before {
					content: '\ea8c';
				}

				.lni-direction-ltr::before {
					content: '\ea8d';
				}

				.lni-direction-rtl::before {
					content: '\ea8e';
				}

				.lni-direction::before {
					content: '\ea8f';
				}

				.lni-discord::before {
					content: '\ea90';
				}

				.lni-discover::before {
					content: '\ea91';
				}

				.lni-display-alt::before {
					content: '\ea92';
				}

				.lni-display::before {
					content: '\ea93';
				}

				.lni-docker::before {
					content: '\ea94';
				}

				.lni-dollar::before {
					content: '\ea95';
				}

				.lni-domain::before {
					content: '\ea96';
				}

				.lni-download::before {
					content: '\ea97';
				}

				.lni-dribbble::before {
					content: '\ea98';
				}

				.lni-drop::before {
					content: '\ea99';
				}

				.lni-dropbox-original::before {
					content: '\ea9a';
				}

				.lni-dropbox::before {
					content: '\ea9b';
				}

				.lni-drupal-original::before {
					content: '\ea9c';
				}

				.lni-drupal::before {
					content: '\ea9d';
				}

				.lni-dumbbell::before {
					content: '\ea9e';
				}

				.lni-edge::before {
					content: '\ea9f';
				}

				.lni-emoji-cool::before {
					content: '\eaa0';
				}

				.lni-emoji-friendly::before {
					content: '\eaa1';
				}

				.lni-emoji-happy::before {
					content: '\eaa2';
				}

				.lni-emoji-sad::before {
					content: '\eaa3';
				}

				.lni-emoji-smile::before {
					content: '\eaa4';
				}

				.lni-emoji-speechless::before {
					content: '\eaa5';
				}

				.lni-emoji-suspect::before {
					content: '\eaa6';
				}

				.lni-emoji-tounge::before {
					content: '\eaa7';
				}

				.lni-empty-file::before {
					content: '\eaa8';
				}

				.lni-enter::before {
					content: '\eaa9';
				}

				.lni-envato::before {
					content: '\eaaa';
				}

				.lni-envelope::before {
					content: '\eaab';
				}

				.lni-eraser::before {
					content: '\eaac';
				}

				.lni-euro::before {
					content: '\eaad';
				}

				.lni-exit-down::before {
					content: '\eaae';
				}

				.lni-exit-up::before {
					content: '\eaaf';
				}

				.lni-exit::before {
					content: '\eab0';
				}

				.lni-eye::before {
					content: '\eab1';
				}

				.lni-facebook-filled::before {
					content: '\eab2';
				}

				.lni-facebook-messenger::before {
					content: '\eab3';
				}

				.lni-facebook-original::before {
					content: '\eab4';
				}

				.lni-facebook-oval::before {
					content: '\eab5';
				}

				.lni-facebook::before {
					content: '\eab6';
				}

				.lni-figma::before {
					content: '\eab7';
				}

				.lni-files::before {
					content: '\eab8';
				}

				.lni-firefox-original::before {
					content: '\eab9';
				}

				.lni-firefox::before {
					content: '\eaba';
				}

				.lni-fireworks::before {
					content: '\eabb';
				}

				.lni-first-aid::before {
					content: '\eabc';
				}

				.lni-flag-alt::before {
					content: '\eabd';
				}

				.lni-flag::before {
					content: '\eabe';
				}

				.lni-flags::before {
					content: '\eabf';
				}

				.lni-flickr::before {
					content: '\eac0';
				}

				.lni-basketball::before {
					content: '\eac1';
				}

				.lni-behance::before {
					content: '\eac2';
				}

				.lni-forward::before {
					content: '\eac3';
				}

				.lni-frame-expand::before {
					content: '\eac4';
				}

				.lni-flower::before {
					content: '\eac5';
				}

				.lni-full-screen::before {
					content: '\eac6';
				}

				.lni-funnel::before {
					content: '\eac7';
				}

				.lni-gallery::before {
					content: '\eac8';
				}

				.lni-game::before {
					content: '\eac9';
				}

				.lni-gift::before {
					content: '\eaca';
				}

				.lni-git::before {
					content: '\eacb';
				}

				.lni-github-original::before {
					content: '\eacc';
				}

				.lni-github::before {
					content: '\eacd';
				}

				.lni-goodreads::before {
					content: '\eace';
				}

				.lni-google-drive::before {
					content: '\eacf';
				}

				.lni-google-pay::before {
					content: '\ead0';
				}

				.lni-fresh-juice::before {
					content: '\ead1';
				}

				.lni-folder::before {
					content: '\ead2';
				}

				.lni-bi-cycle::before {
					content: '\ead3';
				}

				.lni-graph::before {
					content: '\ead4';
				}

				.lni-grid-alt::before {
					content: '\ead5';
				}

				.lni-grid::before {
					content: '\ead6';
				}

				.lni-google-wallet::before {
					content: '\ead7';
				}

				.lni-grow::before {
					content: '\ead8';
				}

				.lni-hammer::before {
					content: '\ead9';
				}

				.lni-hand::before {
					content: '\eada';
				}

				.lni-handshake::before {
					content: '\eadb';
				}

				.lni-harddrive::before {
					content: '\eadc';
				}

				.lni-headphone-alt::before {
					content: '\eadd';
				}

				.lni-headphone::before {
					content: '\eade';
				}

				.lni-heart-filled::before {
					content: '\eadf';
				}

				.lni-heart-monitor::before {
					content: '\eae0';
				}

				.lni-heart::before {
					content: '\eae1';
				}

				.lni-helicopter::before {
					content: '\eae2';
				}

				.lni-helmet::before {
					content: '\eae3';
				}

				.lni-help::before {
					content: '\eae4';
				}

				.lni-highlight-alt::before {
					content: '\eae5';
				}

				.lni-highlight::before {
					content: '\eae6';
				}

				.lni-home::before {
					content: '\eae7';
				}

				.lni-hospital::before {
					content: '\eae8';
				}

				.lni-hourglass::before {
					content: '\eae9';
				}

				.lni-html5::before {
					content: '\eaea';
				}

				.lni-image::before {
					content: '\eaeb';
				}

				.lni-inbox::before {
					content: '\eaec';
				}

				.lni-indent-decrease::before {
					content: '\eaed';
				}

				.lni-indent-increase::before {
					content: '\eaee';
				}

				.lni-infinite::before {
					content: '\eaef';
				}

				.lni-information::before {
					content: '\eaf0';
				}

				.lni-instagram-filled::before {
					content: '\eaf1';
				}

				.lni-instagram-original::before {
					content: '\eaf2';
				}

				.lni-instagram::before {
					content: '\eaf3';
				}

				.lni-invention::before {
					content: '\eaf4';
				}

				.lni-graduation::before {
					content: '\eaf5';
				}

				.lni-invest-monitor::before {
					content: '\eaf6';
				}

				.lni-island::before {
					content: '\eaf7';
				}

				.lni-italic::before {
					content: '\eaf8';
				}

				.lni-java::before {
					content: '\eaf9';
				}

				.lni-javascript::before {
					content: '\eafa';
				}

				.lni-jcb::before {
					content: '\eafb';
				}

				.lni-joomla-original::before {
					content: '\eafc';
				}

				.lni-joomla::before {
					content: '\eafd';
				}

				.lni-jsfiddle::before {
					content: '\eafe';
				}

				.lni-juice::before {
					content: '\eaff';
				}

				.lni-key::before {
					content: '\eb00';
				}

				.lni-keyboard::before {
					content: '\eb01';
				}

				.lni-keyword-research::before {
					content: '\eb02';
				}

				.lni-hacker-news::before {
					content: '\eb03';
				}

				.lni-google::before {
					content: '\eb04';
				}

				.lni-laravel::before {
					content: '\eb05';
				}

				.lni-layers::before {
					content: '\eb06';
				}

				.lni-layout::before {
					content: '\eb07';
				}

				.lni-leaf::before {
					content: '\eb08';
				}

				.lni-library::before {
					content: '\eb09';
				}

				.lni-licencse::before {
					content: '\eb0a';
				}

				.lni-life-ring::before {
					content: '\eb0b';
				}

				.lni-line-dashed::before {
					content: '\eb0c';
				}

				.lni-line-dotted::before {
					content: '\eb0d';
				}

				.lni-line-double::before {
					content: '\eb0e';
				}

				.lni-line-spacing::before {
					content: '\eb0f';
				}

				.lni-line::before {
					content: '\eb10';
				}

				.lni-lineicons-alt::before {
					content: '\eb11';
				}

				.lni-lineicons::before {
					content: '\eb12';
				}

				.lni-link::before {
					content: '\eb13';
				}

				.lni-linkedin-original::before {
					content: '\eb14';
				}

				.lni-linkedin::before {
					content: '\eb15';
				}

				.lni-list::before {
					content: '\eb16';
				}

				.lni-lock-alt::before {
					content: '\eb17';
				}

				.lni-lock::before {
					content: '\eb18';
				}

				.lni-magnet::before {
					content: '\eb19';
				}

				.lni-magnifier::before {
					content: '\eb1a';
				}

				.lni-mailchimp::before {
					content: '\eb1b';
				}

				.lni-map-marker::before {
					content: '\eb1c';
				}

				.lni-map::before {
					content: '\eb1d';
				}

				.lni-mashroom::before {
					content: '\eb1e';
				}

				.lni-mastercard::before {
					content: '\eb1f';
				}

				.lni-medall-alt::before {
					content: '\eb20';
				}

				.lni-medall::before {
					content: '\eb21';
				}

				.lni-medium::before {
					content: '\eb22';
				}

				.lni-laptop::before {
					content: '\eb23';
				}

				.lni-investment::before {
					content: '\eb24';
				}

				.lni-laptop-phone::before {
					content: '\eb25';
				}

				.lni-megento::before {
					content: '\eb26';
				}

				.lni-mic::before {
					content: '\eb27';
				}

				.lni-microphone::before {
					content: '\eb28';
				}

				.lni-menu::before {
					content: '\eb29';
				}

				.lni-microscope::before {
					content: '\eb2a';
				}

				.lni-money-location::before {
					content: '\eb2b';
				}

				.lni-minus::before {
					content: '\eb2c';
				}

				.lni-mobile::before {
					content: '\eb2d';
				}

				.lni-more-alt::before {
					content: '\eb2e';
				}

				.lni-mouse::before {
					content: '\eb2f';
				}

				.lni-move::before {
					content: '\eb30';
				}

				.lni-music::before {
					content: '\eb31';
				}

				.lni-network::before {
					content: '\eb32';
				}

				.lni-night::before {
					content: '\eb33';
				}

				.lni-nodejs-alt::before {
					content: '\eb34';
				}

				.lni-nodejs::before {
					content: '\eb35';
				}

				.lni-notepad::before {
					content: '\eb36';
				}

				.lni-npm::before {
					content: '\eb37';
				}

				.lni-offer::before {
					content: '\eb38';
				}

				.lni-opera::before {
					content: '\eb39';
				}

				.lni-package::before {
					content: '\eb3a';
				}

				.lni-page-break::before {
					content: '\eb3b';
				}

				.lni-pagination::before {
					content: '\eb3c';
				}

				.lni-paint-bucket::before {
					content: '\eb3d';
				}

				.lni-paint-roller::before {
					content: '\eb3e';
				}

				.lni-pallet::before {
					content: '\eb3f';
				}

				.lni-paperclip::before {
					content: '\eb40';
				}

				.lni-more::before {
					content: '\eb41';
				}

				.lni-pause::before {
					content: '\eb42';
				}

				.lni-paypal-original::before {
					content: '\eb43';
				}

				.lni-microsoft::before {
					content: '\eb44';
				}

				.lni-money-protection::before {
					content: '\eb45';
				}

				.lni-pencil::before {
					content: '\eb46';
				}

				.lni-paypal::before {
					content: '\eb47';
				}

				.lni-pencil-alt::before {
					content: '\eb48';
				}

				.lni-patreon::before {
					content: '\eb49';
				}

				.lni-phone-set::before {
					content: '\eb4a';
				}

				.lni-phone::before {
					content: '\eb4b';
				}

				.lni-pin::before {
					content: '\eb4c';
				}

				.lni-pinterest::before {
					content: '\eb4d';
				}

				.lni-pie-chart::before {
					content: '\eb4e';
				}

				.lni-pilcrow::before {
					content: '\eb4f';
				}

				.lni-plane::before {
					content: '\eb50';
				}

				.lni-play::before {
					content: '\eb51';
				}

				.lni-plug::before {
					content: '\eb52';
				}

				.lni-plus::before {
					content: '\eb53';
				}

				.lni-pointer-down::before {
					content: '\eb54';
				}

				.lni-pointer-left::before {
					content: '\eb55';
				}

				.lni-pointer-right::before {
					content: '\eb56';
				}

				.lni-pointer-up::before {
					content: '\eb57';
				}

				.lni-play-store::before {
					content: '\eb58';
				}

				.lni-pizza::before {
					content: '\eb59';
				}

				.lni-postcard::before {
					content: '\eb5a';
				}

				.lni-pound::before {
					content: '\eb5b';
				}

				.lni-power-switch::before {
					content: '\eb5c';
				}

				.lni-printer::before {
					content: '\eb5d';
				}

				.lni-producthunt::before {
					content: '\eb5e';
				}

				.lni-protection::before {
					content: '\eb5f';
				}

				.lni-pulse::before {
					content: '\eb60';
				}

				.lni-pyramids::before {
					content: '\eb61';
				}

				.lni-python::before {
					content: '\eb62';
				}

				.lni-pointer::before {
					content: '\eb63';
				}

				.lni-popup::before {
					content: '\eb64';
				}

				.lni-quotation::before {
					content: '\eb65';
				}

				.lni-radio-button::before {
					content: '\eb66';
				}

				.lni-rain::before {
					content: '\eb67';
				}

				.lni-quora::before {
					content: '\eb68';
				}

				.lni-react::before {
					content: '\eb69';
				}

				.lni-question-circle::before {
					content: '\eb6a';
				}

				.lni-php::before {
					content: '\eb6b';
				}

				.lni-reddit::before {
					content: '\eb6c';
				}

				.lni-reload::before {
					content: '\eb6d';
				}

				.lni-restaurant::before {
					content: '\eb6e';
				}

				.lni-road::before {
					content: '\eb6f';
				}

				.lni-rocket::before {
					content: '\eb70';
				}

				.lni-rss-feed::before {
					content: '\eb71';
				}

				.lni-ruler-alt::before {
					content: '\eb72';
				}

				.lni-ruler-pencil::before {
					content: '\eb73';
				}

				.lni-ruler::before {
					content: '\eb74';
				}

				.lni-rupee::before {
					content: '\eb75';
				}

				.lni-save::before {
					content: '\eb76';
				}

				.lni-school-bench-alt::before {
					content: '\eb77';
				}

				.lni-school-bench::before {
					content: '\eb78';
				}

				.lni-scooter::before {
					content: '\eb79';
				}

				.lni-scroll-down::before {
					content: '\eb7a';
				}

				.lni-search-alt::before {
					content: '\eb7b';
				}

				.lni-search::before {
					content: '\eb7c';
				}

				.lni-select::before {
					content: '\eb7d';
				}

				.lni-seo::before {
					content: '\eb7e';
				}

				.lni-service::before {
					content: '\eb7f';
				}

				.lni-share-alt::before {
					content: '\eb80';
				}

				.lni-share::before {
					content: '\eb81';
				}

				.lni-shield::before {
					content: '\eb82';
				}

				.lni-shift-left::before {
					content: '\eb83';
				}

				.lni-shift-right::before {
					content: '\eb84';
				}

				.lni-ship::before {
					content: '\eb85';
				}

				.lni-shopify::before {
					content: '\eb86';
				}

				.lni-shopping-basket::before {
					content: '\eb87';
				}

				.lni-shortcode::before {
					content: '\eb88';
				}

				.lni-shovel::before {
					content: '\eb89';
				}

				.lni-shuffle::before {
					content: '\eb8a';
				}

				.lni-signal::before {
					content: '\eb8b';
				}

				.lni-sketch::before {
					content: '\eb8c';
				}

				.lni-skipping-rope::before {
					content: '\eb8d';
				}

				.lni-skype::before {
					content: '\eb8e';
				}

				.lni-slack::before {
					content: '\eb8f';
				}

				.lni-slice::before {
					content: '\eb90';
				}

				.lni-slideshare::before {
					content: '\eb91';
				}

				.lni-slim::before {
					content: '\eb92';
				}

				.lni-reply::before {
					content: '\eb93';
				}

				.lni-sort-alpha-asc::before {
					content: '\eb94';
				}

				.lni-remove-file::before {
					content: '\eb95';
				}

				.lni-sort-amount-dsc::before {
					content: '\eb96';
				}

				.lni-sort-amount-asc::before {
					content: '\eb97';
				}

				.lni-soundcloud::before {
					content: '\eb98';
				}

				.lni-souncloud-original::before {
					content: '\eb99';
				}

				.lni-spiner-solid::before {
					content: '\eb9a';
				}

				.lni-revenue::before {
					content: '\eb9b';
				}

				.lni-spinner::before {
					content: '\eb9c';
				}

				.lni-spellcheck::before {
					content: '\eb9d';
				}

				.lni-spotify::before {
					content: '\eb9e';
				}

				.lni-spray::before {
					content: '\eb9f';
				}

				.lni-sprout::before {
					content: '\eba0';
				}

				.lni-snapchat::before {
					content: '\eba1';
				}

				.lni-stamp::before {
					content: '\eba2';
				}

				.lni-star-empty::before {
					content: '\eba3';
				}

				.lni-star-filled::before {
					content: '\eba4';
				}

				.lni-star-half::before {
					content: '\eba5';
				}

				.lni-star::before {
					content: '\eba6';
				}

				.lni-stats-down::before {
					content: '\eba7';
				}

				.lni-spinner-arrow::before {
					content: '\eba8';
				}

				.lni-steam::before {
					content: '\eba9';
				}

				.lni-stackoverflow::before {
					content: '\ebaa';
				}

				.lni-stop::before {
					content: '\ebab';
				}

				.lni-strikethrough::before {
					content: '\ebac';
				}

				.lni-sthethoscope::before {
					content: '\ebad';
				}

				.lni-stumbleupon::before {
					content: '\ebae';
				}

				.lni-sun::before {
					content: '\ebaf';
				}

				.lni-support::before {
					content: '\ebb0';
				}

				.lni-surf-board::before {
					content: '\ebb1';
				}

				.lni-swift::before {
					content: '\ebb2';
				}

				.lni-syringe::before {
					content: '\ebb3';
				}

				.lni-tab::before {
					content: '\ebb4';
				}

				.lni-tag::before {
					content: '\ebb5';
				}

				.lni-target-customer::before {
					content: '\ebb6';
				}

				.lni-target-revenue::before {
					content: '\ebb7';
				}

				.lni-target::before {
					content: '\ebb8';
				}

				.lni-taxi::before {
					content: '\ebb9';
				}

				.lni-stats-up::before {
					content: '\ebba';
				}

				.lni-telegram-original::before {
					content: '\ebbb';
				}

				.lni-telegram::before {
					content: '\ebbc';
				}

				.lni-text-align-center::before {
					content: '\ebbd';
				}

				.lni-text-align-justify::before {
					content: '\ebbe';
				}

				.lni-text-align-left::before {
					content: '\ebbf';
				}

				.lni-text-format-remove::before {
					content: '\ebc0';
				}

				.lni-text-align-right::before {
					content: '\ebc1';
				}

				.lni-text-format::before {
					content: '\ebc2';
				}

				.lni-thought::before {
					content: '\ebc3';
				}

				.lni-thumbs-down::before {
					content: '\ebc4';
				}

				.lni-thumbs-up::before {
					content: '\ebc5';
				}

				.lni-thunder-alt::before {
					content: '\ebc6';
				}

				.lni-thunder::before {
					content: '\ebc7';
				}

				.lni-ticket-alt::before {
					content: '\ebc8';
				}

				.lni-ticket::before {
					content: '\ebc9';
				}

				.lni-timer::before {
					content: '\ebca';
				}

				.lni-train-alt::before {
					content: '\ebcb';
				}

				.lni-train::before {
					content: '\ebcc';
				}

				.lni-trash::before {
					content: '\ebcd';
				}

				.lni-travel::before {
					content: '\ebce';
				}

				.lni-tree::before {
					content: '\ebcf';
				}

				.lni-trees::before {
					content: '\ebd0';
				}

				.lni-trello::before {
					content: '\ebd1';
				}

				.lni-trowel::before {
					content: '\ebd2';
				}

				.lni-tshirt::before {
					content: '\ebd3';
				}

				.lni-tumblr::before {
					content: '\ebd4';
				}

				.lni-twitch::before {
					content: '\ebd5';
				}

				.lni-twitter-filled::before {
					content: '\ebd6';
				}

				.lni-twitter-original::before {
					content: '\ebd7';
				}

				.lni-twitter::before {
					content: '\ebd8';
				}

				.lni-ubuntu::before {
					content: '\ebd9';
				}

				.lni-underline::before {
					content: '\ebda';
				}

				.lni-unlink::before {
					content: '\ebdb';
				}

				.lni-unlock::before {
					content: '\ebdc';
				}

				.lni-upload::before {
					content: '\ebdd';
				}

				.lni-user::before {
					content: '\ebde';
				}

				.lni-users::before {
					content: '\ebdf';
				}

				.lni-ux::before {
					content: '\ebe0';
				}

				.lni-vector::before {
					content: '\ebe1';
				}

				.lni-video::before {
					content: '\ebe2';
				}

				.lni-vimeo::before {
					content: '\ebe3';
				}

				.lni-visa::before {
					content: '\ebe4';
				}

				.lni-vk::before {
					content: '\ebe5';
				}

				.lni-volume-high::before {
					content: '\ebe6';
				}

				.lni-volume-low::before {
					content: '\ebe7';
				}

				.lni-volume-medium::before {
					content: '\ebe8';
				}

				.lni-volume-mute::before {
					content: '\ebe9';
				}

				.lni-volume::before {
					content: '\ebea';
				}

				.lni-wallet::before {
					content: '\ebeb';
				}

				.lni-warning::before {
					content: '\ebec';
				}

				.lni-website-alt::before {
					content: '\ebed';
				}

				.lni-website::before {
					content: '\ebee';
				}

				.lni-wechat::before {
					content: '\ebef';
				}

				.lni-weight::before {
					content: '\ebf0';
				}

				.lni-whatsapp::before {
					content: '\ebf1';
				}

				.lni-wheelbarrow::before {
					content: '\ebf2';
				}

				.lni-wheelchair::before {
					content: '\ebf3';
				}

				.lni-windows::before {
					content: '\ebf4';
				}

				.lni-wordpress-filled::before {
					content: '\ebf5';
				}

				.lni-wordpress::before {
					content: '\ebf6';
				}

				.lni-world-alt::before {
					content: '\ebf7';
				}

				.lni-world::before {
					content: '\ebf8';
				}

				.lni-write::before {
					content: '\ebf9';
				}

				.lni-yahoo::before {
					content: '\ebfa';
				}

				.lni-ycombinator::before {
					content: '\ebfb';
				}

				.lni-yen::before {
					content: '\ebfc';
				}

				.lni-youtube::before {
					content: '\ebfd';
				}

				.lni-zip::before {
					content: '\ebfe';
				}

				.lni-zoom-in::before {
					content: '\ebff';
				}

				.lni-zoom-out::before {
					content: '\ec00';
				}

				.lni-teabag::before {
					content: '\ec01';
				}

				.lni-stripe::before {
					content: '\ec02';
				}

				.lni-spotify-original::before {
					content: '\ec03';
				}
			`}</style>
		</Layout>
	)
}

export default BlogApp

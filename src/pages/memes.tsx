import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useEffect, useState } from "react";
import MemeList from "../data/memes";
import { Video as VideoType } from "../types/video";
import { useRouter } from "next/router";
import styles from "../styles/memes.module.scss";

type MemesProps = {
	messages: any;
	videos: VideoType[];
};

const Memes: NextPage<MemesProps> = ({ videos }) => {
	const [video, setVideo] = useState("https://youtu.be/_rP5TrwzvPo");
	const [nsfw, setNsfw] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (router.query.nsfw === "") setNsfw(true);
	}, [router]);

	return (
		<Layout>
			<h1>Memes</h1>

			<ul className="collection">
				{videos
					.filter((video) => (nsfw ? true : !video.nsfw))
					.map((video) => (
						<li className="collection-item" key={video.name}>
							<div className={styles.row}>
								<div className={styles.text}>{video.name}</div>
								<button
									data-target="modal1"
									className="btn-floating btn-large waves-effect waves-light indigo modal-trigger"
									onClick={() => {
										setVideo(video.url);
									}}
								>
									<i className="material-icons">play_arrow</i>
								</button>
							</div>
						</li>
					))}
			</ul>

			<div id="modal1" className="modal">
				<div className="modal-content">
					<Plyr
						source={{
							type: "video",
							sources: [{ src: video, provider: "youtube" }],
						}}
					/>
				</div>
				<div className="modal-footer">
					<div className="modal-close btn-flat waves-effect waves-light">Close</div>
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<MemesProps> = async ({
	locale,
}) => {
	return {
		props: {
			messages: (await import(`../../translations/${locale}.json`)).default,
			videos: MemeList,
		},
	};
};

export default Memes;

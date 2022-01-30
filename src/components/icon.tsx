import React, { FC } from "react";
import Image from "next/image";

type IconProps = {
	image: string;
	url: string;
};

const Icon: FC<IconProps> = ({ image, url }) => (
	<a href={url}>
		<Image src={`/icons/${image}`} width="32px" height="32px" alt={image} />
	</a>
);

export default Icon;

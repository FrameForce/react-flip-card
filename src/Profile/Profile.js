import React from 'react';

import style from './Profile.module.css';

const Profile = () => {
	const name = 'Felipe Gabriel Arend';
	const title = 'Software Developer';
	const github = 'https://github.com/FrameForce';

	return (
		<div className={style.profile}>
			<h1>{name}</h1>
			<p>{title}</p>
			<a href={github} target="_blank" rel="noopener noreferrer">
				See GitHub Profile
			</a>
		</div>
	);
};

export { Profile };

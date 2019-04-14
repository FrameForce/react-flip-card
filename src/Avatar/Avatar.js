import React from 'react';

import style from './Avatar.module.css';

const Avatar = () => {
	const src = 'https://avatars2.githubusercontent.com/u/8113141';
	return <img className={style.avatar} src={src} alt="Avatar" />;
};

export { Avatar };

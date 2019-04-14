import React from 'react';

import style from './FlipCard.module.css';

const FlipCard = props => (
	<div className={style.outer}>
		<div className={style.inner}>
			<div className={style.front}>{props.renderFront()}</div>
			<div className={style.back}>{props.renderBack()}</div>
		</div>
	</div>
);

export { FlipCard };

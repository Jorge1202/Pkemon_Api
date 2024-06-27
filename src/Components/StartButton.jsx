import React from 'react';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const StartButton = ({isFavorite, onclick}) => {
    const Icon = isFavorite ? StarFilled : StarOutlined
    return (
        <Button icon={<Icon/>} onClick={onclick}/>
    );
};

export { StartButton };
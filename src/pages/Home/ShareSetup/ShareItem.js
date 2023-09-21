
const Item = (props) => {
    const {image} = props;
    return (
        <img src={image} alt="item" />
    )
}

export default Item;
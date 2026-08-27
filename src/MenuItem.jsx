function MenuItem({name, price, description, category, emoji}){
    return(
    <article className="menu-item">
        <h3 className="name">{emoji} {name}</h3>
        <p className="description">{description}</p>
        <p className={`category ${category.toLowerCase()}`}>{category}</p>
        <p className="price">{(price * 1.15).toFixed(2)} ETB</p>
    </article>
  );
}
export default MenuItem;
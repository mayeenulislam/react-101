function Article(props) {
    return (
        <article>
            Article {props.serial}
            <h4>{props.content ? props.content.title : ''}</h4>
            <div>{props.content ? props.content.content : ''}</div>
        </article>
    )
}

export default Article;
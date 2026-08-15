
const Layout = ({header, content, footer}) => {
  return (
    <div>
      <header>{header}</header>
      <main className="content">{content}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout
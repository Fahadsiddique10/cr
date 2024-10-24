interface Footer_Props {

    description: string

}

const Footer = ({ description }: Footer_Props) => {
    return (
      <li><a href="#">{description}</a></li>
    )

}
export default Footer

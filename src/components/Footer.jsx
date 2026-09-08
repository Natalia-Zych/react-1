import './Footer.css'

function Footer(){
    const year = new Date().getFullYear()

    return (
        <section className='footer'>
            <p>Copyright © {year} NZ Company. Wszelkie prawa zastrzeżone.</p>
        </section>
    )
}

export default Footer
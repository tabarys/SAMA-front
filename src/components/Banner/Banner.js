import styled from 'styled-components';
const BannerCotainer = styled.div`
display: flex;
justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    height: 18rem;
    flex-wrap: wrap;
    overflow: hidden;
`
const BannerText = styled.p`
`
export default function Banner(props) {

    return (
        <BannerCotainer>
            <BannerText><b>Bienvenue chez SAMA Travel!</b> <br></br> Trouvez un billet de train flexible pour votre prochain voyage en France</BannerText>
        </BannerCotainer>

    )
}

/* //<BannerImg src={require('../../assets/banner.jpg')}/>*/ 
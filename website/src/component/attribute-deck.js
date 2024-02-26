import AttributeCard from "./attribute-card"
import "./attributeDeck.css";

function AttributeDeck(props){
    const commonProps = {imagePath: 'https://s3-alpha-sig.figma.com/img/73e4/677c/3140e6a48483d96c232349460fc9837d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpG9DjOyhbt~HwkWY4j~LZh04Q2cXJVnVlmXdPfMhUBs5Uvl3VYhKUrsorlRW2G~Xm0GI7XDX~JYGUnkCmcYNf6PsDt4Flx6GrWGfszdXfiJXzgZ-qCXM2w3x3Z1CCFIB0cIO4T0og9L2LJWNaGhbgh31H17sJ5E5lkcSiPsO2E9zSoeNgifDsdAGr~cC08EwR~IrzhCIuJcpKkfeittoErbt0eU0jA2iLxCy75UCJz84pfnXhTXsypfkxR6Wtrwtoiv5YzXwZD5hQK8X7W23BFavjvmqZVQ8g5-qsEHJvSODjfBFaU0Nqrak3BybFioA2k9ep0L9kjc58vPXoo1Xw__', attributeContentHeading:"Creative Agency", attributeContentBody:"we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out", badge:{imagePath:"https://s3-alpha-sig.figma.com/img/65e4/2701/d8f30521b0c55d6a21f1b3f29b4d0509?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhLcVqUtfD6VHFvPTMIjQF5bQX4pUU7lHW~IKqoGJGMW3fUMvyRJTH5RosBxoJP1nEFrfClkCZxlusDDF1eeNQnIElY~LhBdxrqWUk6kPVreyGIro9Em3l00legvT4gTefh1r1jvF82ZqO1J4bTHkFcbWfb5cYnW1n-rlR-e98fi4hU-sPOg4yfVR2CEuBIHcdFzrQTNb7lajNIaPPoohid5UT8Ol4reUVqux6JcF9-rJzJ4twk~uVTpDUgCUswxdebQGDNKJ6atnS~nEISU~UoY8uCCNUda2umIF--3jR5CpGSs5OYgjcwVEgJk5ZHDN~g3P0YvwP-R3eNDguNfmA__"}, altName:"altName"};
    return (
        <div className="attributeDeck">
            <AttributeCard commonProps={commonProps}/>
            <AttributeCard commonProps={commonProps}/>
            <AttributeCard commonProps={commonProps}/>
        </div>
    )
}

export default AttributeDeck
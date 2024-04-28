import AttributeCard from "./attribute-card"
import "./attributeDeck.css";

function AttributeDeck(props){
    const commonProps = {imagePath: 'https://i.ibb.co/4SJqz3k/BG-Attribute.png', attributeContentHeading:"Creative Agency", attributeContentBody:"we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out", badge:{imagePath:"https://s3-alpha-sig.figma.com/img/65e4/2701/d8f30521b0c55d6a21f1b3f29b4d0509?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhLcVqUtfD6VHFvPTMIjQF5bQX4pUU7lHW~IKqoGJGMW3fUMvyRJTH5RosBxoJP1nEFrfClkCZxlusDDF1eeNQnIElY~LhBdxrqWUk6kPVreyGIro9Em3l00legvT4gTefh1r1jvF82ZqO1J4bTHkFcbWfb5cYnW1n-rlR-e98fi4hU-sPOg4yfVR2CEuBIHcdFzrQTNb7lajNIaPPoohid5UT8Ol4reUVqux6JcF9-rJzJ4twk~uVTpDUgCUswxdebQGDNKJ6atnS~nEISU~UoY8uCCNUda2umIF--3jR5CpGSs5OYgjcwVEgJk5ZHDN~g3P0YvwP-R3eNDguNfmA__"}, altName:"altName"};
    return (
        <div className="attributeDeck">
            <AttributeCard commonProps={commonProps}/>
            <AttributeCard commonProps={commonProps}/>
            <AttributeCard commonProps={commonProps}/>
        </div>
    )
}

export default AttributeDeck
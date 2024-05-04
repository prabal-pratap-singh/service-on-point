import ServiceCard from "./service-card"

function ServiceDeck(props){
    const serviceCardContent = {
        cardName: "Website Development",
        cardBody:
          "Harnessing cutting-edge tech stacks for web and app development delivering seamless digital experiences and innovative solutions.",
        cardSvg: `<svg viewBox="0 0 96 96"> <path d="M6 10C4.1 11.9 4 13.3 4 40C4 66.7 4.1 68.1 6 70C7.8 71.8 9.3 72 24 72H40V76V80H36H32V84V88H48H64V84V80H60H56V76V72H72C86.7 72 88.2 71.8 90 70C91.9 68.1 92 66.7 92 40C92 13.3 91.9 11.9 90 10C88.1 8.1 86.7 8 48 8C9.3 8 7.9 8.1 6 10ZM84 40V64H48H12V40V16H48H84V40Z"/>
      <path d="M44.5 38.9C42.4 47.7 40.8 55.2 41.1 55.5C41.4 55.7 43 56.2 44.6 56.6L47.5 57.2L51.5 41.1C53.6 32.3 55.2 24.8 54.9 24.5C54.6 24.3 53 23.8 51.4 23.4L48.5 22.8L44.5 38.9Z"/>
      <path d="M26 33.5L19.5 40L26.3 46.7L33 53.5L35.2 51.2L37.4 49L33 44.5L28.6 40L33 35.5C37.3 31.1 37.3 31 35.5 29C34.5 27.9 33.4 27 33.1 27C32.7 27 29.5 29.9 26 33.5Z" />
      <path d="M60.5001 29C58.7001 31 58.7001 31.1 63.0001 35.5L67.4001 40L63.0001 44.5L58.6001 49L60.8001 51.2L63.0001 53.5L69.7001 46.7L76.5001 40L70.0001 33.5C66.5001 29.9 63.3001 27 62.9001 27C62.6001 27 61.5001 27.9 60.5001 29Z" />
      </svg>`,
      };
      return (
        <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            marginTop: "50px",
            marginBottom: "120px",
            padding: "0px 40px 0px 50px",
        }}>
            <ServiceCard cardContent={serviceCardContent}/>
            <ServiceCard cardContent={serviceCardContent}/>
            <ServiceCard cardContent={serviceCardContent}/>
            <ServiceCard cardContent={serviceCardContent}/>
        </div>
    )
}

export default ServiceDeck
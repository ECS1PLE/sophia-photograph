import PriceBlock from "../UI/PriceBlock";
import ServiceList from "../UI/ServiceList"

const ServiceBlocks = () => {
      const serviceData = [
        { name: "помощь в подборе локации", },
        { name: "более 250-300 кадров (можно и больше)", },
        { name: "подбор референсов для съемки", },
      ];

      const serviceData2 = [
        {name: "помощь в подборе локации"},
        {name: "более 300-350 кадров"},
        {name: "подбор референсов для съемки"},
        {name: "кадры на iphone"},
        {name: "видео для сторис (съемка + монтирование)"},
      ]
    return (
        <div className="flex flex-col gap-[32px] relative">
            <ServiceList title="СЪЕМКА НА КАМЕРУ" services={serviceData} />
            <PriceBlock price="1500"/>
            <ServiceList title="СЪЕМКА НА КАМЕРУ" services={serviceData2} className="sm:w-[419px]"/>
            <PriceBlock price="2100"/>
        </div>
    ) 
}

export default ServiceBlocks;
import PriceBlock from "../UI/PriceBlock";
import ServiceList from "../UI/ServiceList"

const ServiceBlocks = () => {
      const serviceData = [
        { name: "Услуга 1", },
        { name: "Услуга 2", },
        { name: "Услуга 3", },
    ];
    return (
        <div className="flex flex-col gap-[32px]">
            <ServiceList title="СЪЕМКА НА КАМЕРУ" services={serviceData} />
            <PriceBlock price="8000"/>
            <ServiceList title="СЪЕМКА НА КАМЕРУ" services={serviceData} />
            <PriceBlock price="8000"/>
        </div>
    ) 
}

export default ServiceBlocks;
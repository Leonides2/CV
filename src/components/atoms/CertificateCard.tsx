import Button from "./Button";

interface certcardprops {

    IssuedDate: string,
      institution: string,
      title: string,
      link: string
}


const CertificateCard = (ob: certcardprops) => {

    return (
        <div className="border-l-4 border-white/70 pl-4">
            <h3 className="font-bold text-lg">{ob.IssuedDate}</h3>
            <p className="text-white/80 font-semibold">{ob.title}</p>
            <p className="text-white/60">{ob.institution}</p>
            <Button text="Click Here" callback={()=>  window.open(ob.link)}/>
        </div>
    )
}
export default CertificateCard;
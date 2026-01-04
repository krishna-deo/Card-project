import React from 'react'
import Cards from './components/Cards';

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    companyName: "Google",
    postedDate: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color-1024x576.png",
    companyName: "Amazon",
    postedDate: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    postedDate: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQM8mpehO210HDZ-NaU80g6nXd55Z2MMLqg&s",
    companyName: "Infosys",
    postedDate: "3 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZvI2R9YWoxIPsw4EihsX3EjhijgfyJk0ZA&s",
    companyName: "TCS",
    postedDate: "1 week ago",
    post: "Software Tester",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMFtV9zw_NIJOhqcq9Kjp3CV0Oi0AgviajQ&s",
    companyName: "Flipkart",
    postedDate: "4 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    postedDate: "10 weeks ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCUyyn7PCX7njpTkcXED-AeGVp3DbAYhMqA&s",
    companyName: "TechNova",
    postedDate: "6 days ago",
    post: "MERN Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    postedDate: "8 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-paytm-icon-svg-download-png-226448.png?f=webp",
    companyName: "Paytm",
    postedDate: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Gurgaon, India"
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Cards company={elem.companyName} postedDate={elem.postedDate} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}  brandLogo={elem.brandLogo}  />
        </div>
      })}
    </div>
  )
}

export default App
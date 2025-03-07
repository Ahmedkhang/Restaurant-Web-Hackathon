import Link from "next/link"

export default function UsefulLinksSection() {
    const links = [
      {name:"Home", link:"/"},
      {name:"Menu", link:"/menu"},
      {name:"Shop", link:"/shop"},
      {name:"Blogs", link:"/BlogPage"},
      {name:"Chefs", link:"/OurChefs"},
      {name:"About", link:"/about"},
      
    ]
    return (
      <div className="lg:w-[120.36px]">
        <h3 className="text-xl font-bold mb-6">Useful Links</h3>
        <ul className="text-[16px]  lg:leading-6 flex flex-col gap-4">
          {links.map((item,index:number) => (
            <li key={index} className="mb-2">
              <Link href={item.link} className="hover:text-[#FF9F0D] transition duration-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
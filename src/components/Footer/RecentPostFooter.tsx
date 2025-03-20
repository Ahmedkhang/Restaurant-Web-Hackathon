import Link from "next/link";
import Image from "next/image";

export default function RecentPostsSection() {
  const posts = [
    { 
      title: "Top Pakistani Cuisine: A Culinary Journey Through Flavor", 
      date: "February 28, 2022", 
      image: "/blogdetails1.png", 
      link: "/blog/top-pakistani-cuisine-a-culinary-journey-through-flavor" 
    },
    { 
      title: "Desserts and Diabetes: Understanding the Impact", 
      date: "February 28, 2022", 
      image: "/about4.png", 
      link: "/blog/desserts-and-diabetes-understanding-the-impact" 
    },
    { 
      title: "The Ultimate Guide to a Healthy Diet: Eat Well, Live Well", 
      date: "February 28, 2022", 
      image: "/blogdetails2.png", 
      link: "/blog/the-ultimate-guide-to-a-healthy-diet-eat-well-live-well" 
    },
  ];

  return (
    <div className="w-[273.83px]">
      <h3 className="text-xl font-bold mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <Link key={index} href={post.link}>
          <div className="flex items-center mb-4">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={100} 
              height={50} 
              className="w-16 h-16 object-cover mr-4" 
            />
            <div>
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

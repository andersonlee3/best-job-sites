import Button from "./button";

interface JobCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function JobCard({ title, description, image, link }: JobCardProps) {
  return (
    <div className="job-card">
      <img className="logo" src={image} alt={`${title} logo`}></img>
      <h3 className="card-title">{title}</h3>
      <p className="description">{description}</p>
      <Button link={link}></Button>
    </div>
  );
}

export default JobCard;

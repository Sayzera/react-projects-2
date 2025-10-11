import { CardItem } from "./cardItem";

export const CardList2 = ({ commentsData }) => {
  // {
  //     "postId": 1,
  //     "id": 1,
  //     "name": "id labore ex et quam laborum",
  //     "email": "Eliseo@gardner.biz",
  //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  // }
  return (
    <div>
      {commentsData.map((item, index) => (
        <CardItem
          key={index}
          id={item.id}
          name={item.name}
          email={item.email}
          body={item.body}
        />
      ))}
    </div>
  );
};

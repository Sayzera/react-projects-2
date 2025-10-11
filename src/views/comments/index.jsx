import { CardList2 } from '../../components/cardList2'
import CommentsData from '../../temp/comments.json'



const Comments = () => {

  /**
   * Title
   * description
   * onclick 
   * özelliklerini kazandıralım
   */

  return (
  <CardList2 commentsData={CommentsData} />
  )
}

export default Comments
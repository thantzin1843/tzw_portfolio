
import { gql, request } from 'graphql-request'

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getBlogs = async () =>{
    const query = gql`
    query MyQuery {
        blogS {
            author
            date
            description
            id
            title
            image {
            url
            }
        }
}
  `
  const result = await request(MASTER_URL , query);
  return result;
}

const getBlogById = async (id) =>{
    const query = gql`
    query MyQuery {
    blog(where: {id: "${id}"}) {
      author
      date
      description
      image {
        url
      }
      title
    }
  }
  `
  const result = await request(MASTER_URL , query);
  return result;
}
export default {getBlogs,getBlogById};
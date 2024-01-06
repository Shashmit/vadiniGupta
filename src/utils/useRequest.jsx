import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL =
  "https://api-ap-south-1.hygraph.com/v2/clq8gs7nubabd01ujczlkf85n/master";

const graphQLClient = new GraphQLClient(API_URL);

export function useGetBlog() {
  const query = gql`
    {
      blog {
        id
        title
        slug
        coverImage {
          url
        }
        content {
          text
        }
      }
    }
  `;
  return useQuery("blog", async () => {
    try {
      const { blog } = await graphQLClient.request(query);
      return blog;
    } catch (error) {
      console.error("Error fetching blog data:", error);
      throw error;
    }
  });
}

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/system/Box';

import { gql, useQuery } from '@apollo/client';

import Meta from '@/components/Meta';
import QueryResult from '@/components/QueryResult';
import { Todo } from '@/config/types';

const GET_TODO_QUERY = gql`
  query AllTodos {
    todos {
      id
      text
      title
    }
  }
`;

function Page2() {
  const { loading, error, data } = useQuery(GET_TODO_QUERY);

  return (
    <>
      <Meta title="page 2" />
      <Box p={4} width={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.todos.map((todos: Todo) => (
            <Box key={todos.id} p={1} width={0.3} sx={{ minWidth: '300px' }}>
              <Card key={todos.id}>
                <CardHeader title={todos.title}></CardHeader>
                <CardContent>{todos.text}</CardContent>
              </Card>
            </Box>
          ))}
        </QueryResult>
      </Box>
    </>
  );
}

export default Page2;

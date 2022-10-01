import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
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
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <QueryResult error={error} loading={loading} data={data}>
            {data?.todos.map((todos: Todo) => (
              <Grid key={todos.id} item xs={3}>
                <Card key={todos.id}>
                  <CardHeader title={todos.title}></CardHeader>
                  <CardContent>{todos.text}</CardContent>
                </Card>
              </Grid>
            ))}
          </QueryResult>
        </Grid>
      </Box>
    </>
  );
}

export default Page2;

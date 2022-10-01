import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import { gql, useQuery } from '@apollo/client';

import Meta from '@/components/Meta';
import QueryResult from '@/components/QueryResult';
import { FullSizeCenteredFlexBox } from '@/components/styled';
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
      <FullSizeCenteredFlexBox>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.todos.map((todos: Todo) => (
            <Card sx={{ minWidth: 345 }} key={todos.id}>
              <CardHeader title={todos.title}></CardHeader>
              <CardContent>{todos.text}</CardContent>
            </Card>
          ))}
        </QueryResult>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page2;

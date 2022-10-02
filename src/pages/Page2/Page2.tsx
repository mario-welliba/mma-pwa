import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/system/Box';

import Meta from '@/components/Meta';
import QueryResult from '@/components/QueryResult';
import { useGetTodosQuery } from '@/utils/__generated__/graphql';

function Page2() {
  const { loading, error, data } = useGetTodosQuery();

  return (
    <>
      <Meta title="page 2" />
      <Box p={4} width={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.todos.map((todo) => (
            <Box key={todo.id} p={1} width={0.3} sx={{ minWidth: '300px' }}>
              <Card key={todo.id}>
                <CardHeader title={todo.title}></CardHeader>
                <CardContent>{todo.text}</CardContent>
              </Card>
            </Box>
          ))}
        </QueryResult>
      </Box>
    </>
  );
}

export default Page2;

import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const headSname = `${localStorage.getItem('sname')} Center`;

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> under maintenance | {headSname} </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            กำลังทำการปรับปรุงระบบ
          </Typography>
          <Typography variant="h3" paragraph>
            ขออภัยในความไม่สะดวก
          </Typography>

          <Box
            component="img"
            src="/assets/maintenance.png"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

        </StyledContent>
      </Container>
    </>
  );
}

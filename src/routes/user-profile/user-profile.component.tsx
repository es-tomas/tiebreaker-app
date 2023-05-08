import { Grid, Card, Box, Paper } from "@mui/material";

const UserProfile: React.FC = () => {
  return (
    <Box sx={{ width: "100%", paddingTop: "5px" }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              height: 200,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              height: 200,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              height: 200,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;

import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { GameProvider } from "../context/GameContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GameProvider>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Quiz Adventure</Typography>
            </Toolbar>
          </AppBar>
          <Container maxWidth="md">{children}</Container>
        </GameProvider>
      </body>
    </html>
  );
}

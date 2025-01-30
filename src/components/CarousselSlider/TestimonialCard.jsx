import { Box, Typography, Card, CardContent } from "@mui/joy"
import { CardMedia } from "@mui/material"

export function TestimonialCard({imagePath,title,subtitle,body }){
    return (
      <Card
        sx={{
          width: {
            sm: "90%",
            lg: "35%"
          },
          filter: "drop-shadow(rgba(0,0,0,0.25) 0px 4px 4px)",
          height: {
            sm: '200px',
            lg: '155px'
          },
          maxHeight: '200px',
          boxSizing: 'border-box'
          
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <CardMedia
              sx={{ height: "50px", width: "50px", borderRadius: "50%", boxSizing: 'border-box' }}
              image={imagePath}
              title="profilePic"
            />
            <Box sx={{ textAlign: "left", fontWeight: "600" }}>
              <Typography sx={{ color: "#1E1E1E" }}>{title}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "400", textWrap: "balance" }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#1E1E1E",
              marginTop: "1rem",
              textAlign: "left",
              fontWeight: "600",
              fontSize: { sm: '14px', lg: '1rem' },
              textWrap: {
                sm: 'stable'
              }
            }}
          >
            {body}
          </Typography>
        </CardContent>
      </Card>
    );
}
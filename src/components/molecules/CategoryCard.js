import React, { useState, useCallback } from "react";
import noImageUrl from "../../assets/No-Image-Found.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
  Box,
} from "@mui/material";

const CategoryCard = React.memo(
  ({
    reviews_number,
    original_price_currency,
    final_rating_from_reviews,
    price_after_discount,
    original_price,
    classified_product,
  }) => {
    const [fillColorWhite, setFillColorWhite] = useState("#fff");

    const [svgOpacity, setSvgOpacity] = useState("0.9");

    const toggleSVGClick = useCallback(() => {
      setFillColorWhite((prevColor) =>
        prevColor === "#fff" ? "var(--primary-color)" : "#fff"
      );

      setSvgOpacity((prevColor) => (prevColor === "0.9" ? "1" : "0.9"));
    }, []);

    return (
      <Card style={{ margin: "15px 0", borderRadius: "15px" }}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={classified_product.title}
            height='240px'
            image={
              classified_product.image_url != null
                ? classified_product.image_url
                : noImageUrl
            }
            title={classified_product.title}
            style={{ position: "relative" }}
          />

          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "15px",
              color: "white",
            }}
            onClick={toggleSVGClick}
          >
            <BookmarkIcon
              style={{
                fill: fillColorWhite,
                opacity: svgOpacity,
              }}
            />
          </Box>

          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {classified_product.title}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "15px 0",
              }}
            >
              <p
                style={{
                  color: "#FFD700",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {final_rating_from_reviews}
              </p>
              <Rating
                name='read-only'
                value={final_rating_from_reviews}
                readOnly
              />
              <Typography variant='body2' color='textSecondary' component='p'>
                ( {reviews_number})
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {classified_product.instructors &&
              classified_product.instructors.length > 0 ? (
                classified_product.instructors.map((instructor, index) => (
                  <Typography
                    key={index}
                    variant='body2'
                    color='#000'
                    component='p'
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginRight: "5px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {instructor.name},
                  </Typography>
                ))
              ) : (
                <Typography
                  variant='body2'
                  color='#000'
                  component='p'
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginRight: "5px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  <br />
                </Typography>
              )}
            </div>

            <Typography variant='body3' color='textSecondary' component='p'>
              {classified_product.description}
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant='h6'
                color='textPrimary'
                style={{ fontWeight: "bold" }}
              >
                {original_price_currency} {price_after_discount}
              </Typography>
              {original_price && (
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    margin: "0 15px",
                  }}
                >
                  {original_price_currency} {original_price}
                </Typography>
              )}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ margin: " 0", color: "#28A19C" }}>
          <Button
            size='large'
            style={{
              border: "1px solid #28A19C",
              borderRadius: "10px",
              marginRight: "8px",
              margin: "auto",
              color: "var(--primary-color)",
              fontSize: "15px",
            }}
          >
            Enroll Now
          </Button>
          <Button
            size='small'
            style={{
              border: "1px solid #28A19C",
              marginRight: "8px",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          >
            <ShoppingCartIcon style={{ color: "#28A19C" }} />
          </Button>
        </CardActions>
      </Card>
    );
  }
);

export default CategoryCard;

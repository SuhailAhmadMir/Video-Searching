import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}))

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      <ListItem
        alignItems="flex-start"
        style={{ cursor: "pointer" }}
        onClick={() => {
          onVideoSelect(video)
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={video.snippet.thumbnails.medium.url} />
        </ListItemAvatar>
        <ListItemText
          primary={video.snippet.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {video.snippet.channelTitle}{" "}
              </Typography>
              {video.snippet.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  )
}

export default VideoItem

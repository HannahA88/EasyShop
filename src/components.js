import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CheckboxList(props) {
  const [checked, setChecked] = React.useState([0]);

  console.log(props.productList);

  const removeItem = (id) => {
    const event = new CustomEvent("removeItem", { detail: id });
    document.dispatchEvent(event);
    console.log("removeItem");
    // props.productList.splice(id, 1);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 700, bgcolor: "rgba(0, 0, 0, 0.1)" }}
      label="List of products?"
    >
      {props.productList.map((value) => {
        const labelId = `checkbox-list-label-${value.name}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick={() => removeItem(value.name)} />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  style={{ color: "green" }}
                  edge="start"
                  checked={checked.indexOf(value.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${value.name} ${value.quantity} ${value.type}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

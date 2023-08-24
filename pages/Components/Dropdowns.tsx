import React from "react";
import { Delete, Edit, AddCircle, Height, Margin } from "@mui/icons-material";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  OutlinedInput,
  Autocomplete,
  TextField,
  styled,
  AutocompleteGetTagProps,
  autocompleteClasses,
  useAutocomplete,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// demo data for multiselect ******************
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// demo data for multiselect end *******************

// demo data for Search dropdown start *******************

const topFilms = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

// demo data for Search dropdown end *******************

// demo data and styles for Search options in multiselect dropdown starts**********************

const Root = styled("div")(
  ({ theme }) => `
    color: ${
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,.85)"
    };
    font-size: 14px;
  `
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
    border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    }
  
    &.focused {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  
    & input {
      background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
      color: ${
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.65)"
          : "rgba(0,0,0,.85)"
      };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${
      theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
    };
    border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
      background-color: ${
        theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
      };
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${
        theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"
      };
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${
        theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
      };
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `
);

// demo data and styles for Search options in multiselect dropdown ends**********************

const SelectionButtons = () => {
  // functions for multiselect *****************
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // functions for multiselect ends ******************

  // functions and constants for search options in multiselect starts *********************

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [topFilms[1]],
    multiple: true,
    options: topFilms,
    getOptionLabel: (option: any) => option.title,
  });

  interface FilmOptionType {
    label: string;
    year: number;
  }
  // functions and constants for search options in multiselect ends *********************

  return (
    <>
      <div className="text-xl border-b-2  border-blue-200 pb-2">Dropdowns</div>
      <div className="flex pt-8 justify-around">
        {/* Card 1*/}
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Simple Dropdown
            </div>
            {/* Simple Dropdown */}
            <FormControl
              style={{
                width: "400px",
                height: "70px",
                marginTop: "20px",
                zIndex: 0,
              }}
            >
              <InputLabel id="demo-simple-select-label">Choose</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                label="Choose"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* ******************************** */}
          </div>
        </div>
        {/* Card 2 */}
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Multiple Selection Buttons (Checkbox)
            </div>
            {/* MultiSelect dropdown */}
            <FormControl
              sx={{ m: 1, width: 300 }}
              style={{
                width: "400px",
                height: "70px",
                marginTop: "20px",
                zIndex: 0,
              }}
            >
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* ******************************** */}
          </div>
        </div>
      </div>
      <div className="flex pt-8 justify-around">
        {/* Card 3*/}
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Search Dropdown
            </div>
            {/* Search Dropdown */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={topFilms}
              style={{
                width: "400px",
                height: "70px",
                marginTop: "20px",
                zIndex: 0,
              }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            {/* ******************************** */}
          </div>
        </div>
        {/* Card 4 */}
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Multiple Selection with Search
            </div>
            {/* MultiSelect with Search dropdown */}
            <Root>
              <div {...getRootProps()}>
                <Label {...getInputLabelProps()}></Label>
                <InputWrapper
                  ref={setAnchorEl}
                  className={focused ? "focused" : ""}
                  style={{
                    width: "400px",
                    height: "55px",
                    marginTop: "20px",
                    zIndex: 0,
                  }}
                >
                  {value.map((option: FilmOptionType, index: number) => (
                    <StyledTag
                      label={option.label}
                      {...getTagProps({ index })}
                    />
                  ))}
                  <input {...getInputProps()} />
                </InputWrapper>
              </div>
              {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                  {(groupedOptions as typeof topFilms).map(
                    (option: any, index: any) => (
                      <li {...getOptionProps({ option, index })}>
                        <span>{option.label}</span>
                        <CheckIcon fontSize="small" />
                      </li>
                    )
                  )}
                </Listbox>
              ) : null}
            </Root>
            {/* ******************************** */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionButtons;

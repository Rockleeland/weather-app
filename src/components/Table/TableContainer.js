import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import {
  stableSort,
  getSorting,
  descriptionsToIcons
} from "../../utils/functions";

const StyledWords = styled.span`
  text-transform: capitalize;
  display: flex;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
  align-items: center;
  text-align: start;
  padding-top: ${props => (props.margin ? ".5em;" : "0")};
  max-width: ${props => (props.center ? "100%" : "140px")};
`;

const StyledTable = styled(Table)`
  .MuiTableCell-root {
    padding: 5px;
  }
`;

const StyledTableContainer = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: center;
`;

const headCells = [
  {
    id: "dt_txt",
    numeric: false,
    disablePadding: true,
    label: "Date & time (Military)"
  },
  {
    id: "temp_min",
    numeric: false,
    disablePadding: true,
    label: "Min. Temp"
  },
  {
    id: "temp_max",
    numeric: false,
    disablePadding: true,
    label: "Max Temp"
  },
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description"
  }
];

const EnhancedTableHead = ({ classes, order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    if (property !== "dt_txt") {
      return;
    }
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => {
          return (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "none"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                disabled={headCell.id !== "dt_txt"}
                onClick={
                  headCell.id === "dt_txt"
                    ? createSortHandler("dt_txt")
                    : createSortHandler()
                }
                hideSortIcon={headCell.id !== "dt_txt"}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = ({ city }) => {
  return (
    <>
      <Typography variant="h6" id="tableTitle">
        <StyledWords center margin>
          {city}
        </StyledWords>
      </Typography>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 200
    // width: '100%'
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

const convert = time => {
  // Months array
  let monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Convert timestamp to milliseconds
  let date = new Date(time * 1000);
  let year = date.getFullYear();
  let month = monthsArr[date.getMonth()];
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = `0${date.getMinutes()}`;
  // Display date time in MM-dd-yyyy h:m: format
  let convertedTime = `${month} ${day}, ${year} ${hours}:${minutes.substr(-2)}`;
  return convertedTime;
};

const EnhancedTable = ({ rows, city }) => {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows = () => {
    if (rows.length > 0) {
      return (
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
      );
    }
  };

  return (
    <>
      {rows !== null && (
        <StyledTableContainer className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar city={city} />
            <div className={classes.tableWrapper}>
              <StyledTable
                className={classes.table}
                aria-labelledby="tableTitle"
                size="medium"
              >
                <EnhancedTableHead
                  key={rows.main}
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows !== null ? rows.length : 0}
                />
                <TableBody>
                  {stableSort(rows, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow hover tabIndex={-1} key={row.dt}>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.dt !== undefined && (
                              <div>{convert(row.dt)}</div>
                            )}
                          </TableCell>
                          {row.main !== undefined && (
                            <Fragment>
                              <TableCell align="left">
                                {row.main.temp_min.toFixed(0)}&#176;
                              </TableCell>
                              <TableCell align="left">
                                {row.main.temp_max.toFixed(0)}&#176;
                              </TableCell>
                              <TableCell align="left">
                                <StyledWords>
                                  {row.weather[0].description}
                                  {descriptionsToIcons(row.weather[0].main)}
                                </StyledWords>
                              </TableCell>
                            </Fragment>
                          )}
                        </TableRow>
                      );
                    })}
                  {emptyRows() > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </StyledTable>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "previous page"
              }}
              nextIconButtonProps={{
                "aria-label": "next page"
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </StyledTableContainer>
      )}
    </>
  );
};

export default EnhancedTable;

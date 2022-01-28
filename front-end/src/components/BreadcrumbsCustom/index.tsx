import { memo } from "react";
import { Breadcrumbs, Divider, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Images from "config/images";
import clsx from "clsx";
interface BreadcrumbsCustomProps {
  name: string;
  icon: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  className?: any,
}

const Fragment = memo((props: { children: any }) => {
  return (<>{props.children}</>)
})

const BreadcrumbsCustom = memo((props: BreadcrumbsCustomProps) => {
  const classes = useStyles();
  const { className, name, icon } = props;
  const getBackRoute = (link1?: string, link2?: string, link3?: string, index?: number) => {
    if (index === 0) {
      return link1
    }
    else if (index === 1) {
      return link2
    }
    else if (index === 2) {
      return link3
    }
  }

  return (
    <Route>
      {({ location }) => {
        let path = location.pathname
        const pathnames = path.split("/").filter((x) => x);
        //console.log(pathnames, 'location.pathname.split("/")')
        return (
          <div className={classes.container}>
            <p className={classes.name}>{name}</p>
            <Divider orientation="vertical" flexItem />
            <img src={icon} alt="" />
            <Breadcrumbs
              aria-label="Breadcrumb"
              className={className}
              separator={<img src={Images.icCaretRight} alt="" />}
              classes={{
                root: clsx(classes.containerBreadcrumbs),
              }}
            >
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const { link1, link2, link3, link4 } = props;
                return last ? (
                  <Fragment key={to}>{link4 || link3 || link2}</Fragment>
                ) : (index !== 0 ?
                  <RouterLink to={to} key={to}>
                    {
                      !index && (
                        <IconButton>
                          <img src={(!!index && link4) ? Images.icCaretRight : Images.icBack} alt="icon" />
                        </IconButton>
                      )
                    }
                    <span>{getBackRoute(link1, link2, link3, index)}</span>
                  </RouterLink>
                  :
                  <span key={to} className={classes.link1}>{link1}</span>
                );
              })}
            </Breadcrumbs>
          </div>
        );
      }}
    </Route>
  );
});

export default BreadcrumbsCustom;

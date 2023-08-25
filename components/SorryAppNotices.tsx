import Link from "next/link";
import { motion } from "framer-motion";
import dayjs from "dayjs";

import { TruncateString } from "../lib/TruncateString";
import { useMemo, useState } from "react";
import IconMegaphone from "./icons/IconMegaphone";
import IconExternalLink from "./icons/IconExternalLink";
import IconButton from "./IconButton";

// const NoticesWrapper = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   gap: 10,
//   position: "absolute",
//   top: "-50%",
//   right: 0,
//   zIndex: 999,
//   width: 280,
//   height: "auto",
//   maxHeight: "90vh",
//   overflowY: "scroll",
//   background: "#fff",
//   padding: 10,
//   borderRadius: 8,
//   border: "1px solid rgba(0, 0, 0, 0.3)",
//   boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
// });

// const NoticesWrapperAnimated = motion(NoticesWrapper);

// const NoticeButton = styled(IconButton)({});

// const StyledAlert = styled(Alert)(({ theme }) => ({
//   position: "relative",
//   border: "1px solid transparent",
//   "&.MuiAlert-root": {
//     margin: 0,
//   },
//   ":hover": {
//     border: `1px solid ${theme.palette.secondary.main}`,
//   },
// }));

// const StyledIconExternalLink = styled("div")({
//   position: "absolute",
//   top: 10,
//   right: 10,
// });

// const NoticeState = styled(Typography)({
//   fontSize: 12,
//   fontWeight: 600,
//   textTransform: "capitalize",
//   fontStyle: "italic",
//   opacity: 0.7,
// });
// const NoticeTitle = styled(Typography)({
//   fontSize: 14,
//   fontWeight: 600,
// });
// const NoticeContent = styled(Typography)({
//   fontSize: 12,
//   fontWeight: 400,
// });

function Alert({ severity, children }: any) {
  const severityVariants: any = {
    success: "bg-green-500/[.06]",
    warning: "bg-yellow-500/[.06]",
    error: "bg-red-500/[.06]",
    info: "bg-blue-500/[.06]",
  };

  return <div className={`${severityVariants[severity]}`}>{children}</div>;
}

function AlertWithCloseButton(props: any) {
  const { title, severity, state, time } = props;
  // const theme = useTheme();

  const formattedTime = dayjs(time ? time : "").format(
    "HH:mm CEST - DD/MM/YYYY"
  );

  return (
    <Alert severity={severity}>
      <div>
        <IconExternalLink width='14px' color={"gray"} />
      </div>
      <p>{state}:</p>
      <p>{formattedTime}</p>
      <p>{title}:</p>
      {props.children}
    </Alert>
  );
}

const NoticesAnimationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: 80,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

function Badge({ children, badgeCount, color }: any) {
  const colorVariants: any = {
    red: "bg-red-500",
    green: "bg-primary",
  };
  return (
    <div>
      <div
        className={`${colorVariants[color]} absolute flex justify-center items-center text-white max-w-[15px] max-h-[15px] rounded-full bottom-0 right-0 text-[10px] p-[5px] leading-none`}
      >
        <p>{badgeCount}</p>
      </div>
      {children}
    </div>
  );
}

export const SorryAppNotices = ({ sorryData }: any) => {
  const filteredNotices = useMemo(
    () =>
      sorryData &&
      sorryData?.response
        .filter(
          (data: any) =>
            data?.state.includes("scheduled") ||
            data?.state.includes("investigating") ||
            data?.state.includes("identified")
        )
        .sort((a: any, b: any) => a.id - b.id),
    [sorryData]
  );

  const [isNoticeButtonClicked, setIsNoticeButtonClicked] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <IconButton
        aria-label='notices'
        onClick={() => setIsNoticeButtonClicked(!isNoticeButtonClicked)}
      >
        {filteredNotices?.length > 0 ? (
          <Badge
            badgeCount={filteredNotices?.length}
            color='red'
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <IconMegaphone width='23px' color='primary' />
          </Badge>
        ) : (
          <Badge
            variant='dot'
            color='green'
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <IconMegaphone width='23px' color='primary' />
          </Badge>
        )}
      </IconButton>
      {isNoticeButtonClicked && (
        <motion.div
          className='flex flex-column gap-[10px] absolute -top-[20px] right-0 w-[280px] h-auto bg-white p-[10px] rounded-lg border border-slate-200'
          variants={NoticesAnimationVariants}
          layoutId='notices'
          initial='hidden'
          animate='visible'
          layout
        >
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice: any, index: any) => {
              return (
                <Link href={notice.link} target='_blank' key={notice.id}>
                  <AlertWithCloseButton
                    key={index}
                    title={notice.subject}
                    link={notice.link}
                    state={notice.state}
                    time={
                      notice.begins_at || notice.began_at || notice.ended_at
                    }
                    severity={
                      notice.state === "scheduled"
                        ? "success"
                        : notice.state === "investigating"
                        ? "warning"
                        : notice.state === "identified"
                        ? "error"
                        : "info"
                    }
                  >
                    <p>{TruncateString(notice.synopsis, 100)}</p>
                  </AlertWithCloseButton>
                </Link>
              );
            })
          ) : (
            <p className='text-green-500'>Everything is running smoothly</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

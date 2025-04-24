import React from "react";
import { PageWrapper } from "@/utils";
import NotificationModalsCard from "./_layouts/notification-modals-card";
import NotificationModalsGrid from "./_layouts/notification-modals-grid";

const NotificationAndModals = () => {
  return (
    <PageWrapper>
      <NotificationModalsGrid />
    </PageWrapper>
  );
};

export default NotificationAndModals;

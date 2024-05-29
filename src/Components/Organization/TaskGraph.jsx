import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Styles/TaskGraph.css';

const TaskGraph = () => {
  const today = new Date();
  const shiftDate = (date, numDays) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  };

  const getRange = (count) => {
    return Array.from({ length: count }, (_, i) => i);
  };

  const generateHeatmapValues = () => {
    return getRange(365).map((index) => {
      return {
        date: shiftDate(today, -index),
        count: Math.floor(Math.random() * 3),
      };
    });
  };

  const values = generateHeatmapValues();

  return (
    <div className="task-graph">
      <h2>Task Contribution Graph</h2>
      <CalendarHeatmap
        startDate={shiftDate(today, -364)}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        showWeekdayLabels
      />
    </div>
  );
};

export default TaskGraph;

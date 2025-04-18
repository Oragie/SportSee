/**
 * @file index.jsx
 * @description Composant React affichant l'activité quotidienne d'un utilisateur sous forme de graphique en barres.
 */

import "./userActivity.scss";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../CustomToolTip";
import ModelUserActivity from "./modelUserActivity";

function UserActivity({ activity }) {
  const formattedActivity = new ModelUserActivity(activity).getFormattedData();

  return (
    <>
      <div className="userActivity">
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedActivity}
            margin={{
              top: 5,
              right: 10,
              left: 43,
              bottom: 5,
            }}
            barGap={8} // Personnaliser l'espace entre les barres
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              stroke="#9B9EAC"
            />
            <YAxis
              yAxisId="Poids"
              orientation="right"
              stroke="#9B9EAC"
              domain={["dataMin - 1", "dataMax + 1"]}
              axisLine={false}
              tickLine={false}
              tickCount={4}
              tickMargin={10}
            />
            <YAxis
              yAxisId="Calories"
              orientation="left"
              stroke="#E60000"
              hide={true}
            />
            <Tooltip
              content={<CustomTooltip type="activity" />} // Recharts passe les props nécessaires (active, payload , etc.) au composant CustomTooltip
              cursor={{
                fill: "#C4C4C480",
              }}
            />
            <Legend
              align="right"
              verticalAlign="top"
              wrapperStyle={{
                marginRight: "15px",
                marginTop: "23px",
                // paddingBottom: '85px',
              }}
              formatter={(value) => {
                if (value === "kilogram") {
                  return "Poids (kg)";
                }
                if (value === "calories") {
                  return "Calories brûlées (kCal)";
                }
                return value;
              }}
              iconType="circle"
            />
            <Bar
              yAxisId="Poids"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="Calories"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

UserActivity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      calories: PropTypes.number,
      kilogram: PropTypes.number,
    })
  ),
};

export default UserActivity;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import ApexCharts from "apexcharts";

const TreatmentsOperations = () => {
    const [isMounted, setIsMounted] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (isMounted && chartRef.current) {
            var options = {
                chart: {
                    height: 280,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                },
                series: [{
                    name: 'Women',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: 'New Women',
                    type: 'line',
                    data: [323, 442, 335, 527, 143, 222, 117, 231, 322, 222, 112, 16]
                }],
                fill: {
                    type:'solid',
                    opacity: [0.2, 1],
                },
                stroke: {
                    width: [0, 4]
                },
                labels: ['01 Jan 2019', '02 Jan 2019', '03 Jan 2019', '04 Jan 2019', '05 Jan 2019', '06 Jan 2019', '07 Jan 2019', '08 Jan 2019', '09 Jan 2019', '10 Jan 2019', '11 Jan 2019', '12 Jan 2019'],
                xaxis: {
                    type: 'datetime'
                },
                markers: {
                    size: 4
                },
                colors: ['#08a597', '#08a597', '#666666', '#888888'],
            };
            var chart = new ApexCharts(
                chartRef.current,
                options
            );
            chart.render();
        }
    }, [isMounted]);

    return (
        <div ref={chartRef} />
    );
}

export default TreatmentsOperations;
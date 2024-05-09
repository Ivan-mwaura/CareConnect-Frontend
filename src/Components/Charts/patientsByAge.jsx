import React from "react";
import { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PatientsByAge = () => {
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
                    height: 400,
                    type: 'line',
                    toolbar: {
                        show: false, 
                    },
                },
                colors: ['#08a597'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                series: [{
                    name: 'Women',
                    data: [0.4, 0.5, 0.7, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
                }],
                grid: {
                    show: true,
                    borderColor: '#f1f1f1',
                    xaxis: {
                        lines: {
                            show: true,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    },
                },
                yaxis: {
                    min: 0,
                    max: 5,
                    title: {
                        text: 'Percent'
                    },
                },
                xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
                    title: {
                        text: 'Age'
                    },
                },
                title: {
                    text: 'Chart by Age (Women)',
                    align: 'center',
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function(val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function(val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },
            };

            var chart = new ApexCharts(
                chartRef.current,
                options
            );
            chart.render();
        }
    }, [isMounted]);

    return <div ref={chartRef} />;
};

export default PatientsByAge;

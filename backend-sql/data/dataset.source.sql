CREATE OR REPLACE VIEW playbook_checkpoints AS (
  SELECT
    *
  FROM (
    SELECT
      1 AS day,
      2 AS cumulated_target
    UNION ALL
    SELECT
      2 AS day,
      2 AS cumulated_target
    UNION ALL
    SELECT
      3 AS day,
      2 AS cumulated_target
    UNION ALL
    SELECT
      4 AS day,
      2 AS cumulated_target
    UNION ALL
    SELECT
      5 AS day,
      3 AS cumulated_target
    UNION ALL
    SELECT
      6 AS day,
      3 AS cumulated_target
    UNION ALL
    SELECT
      7 AS day,
      3 AS cumulated_target
    UNION ALL
    SELECT
      8 AS day,
      3 AS cumulated_target
    UNION ALL
    SELECT
      9 AS day,
      4 AS cumulated_target
    UNION ALL
    SELECT
      10 AS day,
      4 AS cumulated_target
    UNION ALL
    SELECT
      11 AS day,
      4 AS cumulated_target
    UNION ALL
    SELECT
      12 AS day,
      4 AS cumulated_target
    UNION ALL
    SELECT
      13 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      14 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      15 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      16 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      17 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      18 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      19 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      20 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      21 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      22 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      23 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      24 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      25 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      26 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      27 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      28 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      29 AS day,
      20 AS cumulated_target
    UNION ALL
    SELECT
      30 AS day,
      20 AS cumulated_target )
  ORDER BY
    day 
);

CREATE OR REPLACE VIEW activities AS (
  SELECT
    *
  FROM (
    SELECT
      'a-1' AS id,
      'call' AS type,
      DATE '2025-01-08' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-2' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-3' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-4' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-5' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-6' AS id,
      'call' AS type,
      DATE '2025-01-23' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-7' AS id,
      'email' AS type,
      DATE '2025-01-18' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-8' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-9' AS id,
      'demo' AS type,
      DATE '2025-01-10' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-10' AS id,
      'email' AS type,
      DATE '2025-01-07' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-11' AS id,
      'call' AS type,
      DATE '2025-01-10' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-12' AS id,
      'demo' AS type,
      DATE '2025-01-08' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-13' AS id,
      'meeting' AS type,
      DATE '2025-01-15' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-14' AS id,
      'email' AS type,
      DATE '2025-01-09' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-15' AS id,
      'meeting' AS type,
      DATE '2025-01-17' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-16' AS id,
      'call' AS type,
      DATE '2025-01-27' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-17' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-18' AS id,
      'demo' AS type,
      DATE '2025-01-17' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-19' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-20' AS id,
      'demo' AS type,
      DATE '2025-01-12' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-21' AS id,
      'demo' AS type,
      DATE '2025-01-09' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-22' AS id,
      'call' AS type,
      DATE '2025-01-17' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-23' AS id,
      'email' AS type,
      DATE '2025-01-23' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-24' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-25' AS id,
      'call' AS type,
      DATE '2025-01-20' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-26' AS id,
      'demo' AS type,
      DATE '2025-01-14' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-27' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-28' AS id,
      'call' AS type,
      DATE '2025-01-20' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-29' AS id,
      'meeting' AS type,
      DATE '2025-01-05' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-30' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-31' AS id,
      'demo' AS type,
      DATE '2025-01-12' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-32' AS id,
      'call' AS type,
      DATE '2025-01-11' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-33' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-34' AS id,
      'meeting' AS type,
      DATE '2025-01-18' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-35' AS id,
      'email' AS type,
      DATE '2025-01-13' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-36' AS id,
      'meeting' AS type,
      DATE '2025-01-18' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-37' AS id,
      'email' AS type,
      DATE '2025-01-25' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-38' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-39' AS id,
      'demo' AS type,
      DATE '2025-01-15' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-40' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-41' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-42' AS id,
      'demo' AS type,
      DATE '2025-01-17' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-43' AS id,
      'demo' AS type,
      DATE '2025-01-16' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-44' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-45' AS id,
      'call' AS type,
      DATE '2025-01-13' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-46' AS id,
      'call' AS type,
      DATE '2025-01-16' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-47' AS id,
      'meeting' AS type,
      DATE '2025-01-17' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-48' AS id,
      'demo' AS type,
      DATE '2025-01-08' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-49' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-50' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-51' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-52' AS id,
      'meeting' AS type,
      DATE '2025-01-16' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-53' AS id,
      'email' AS type,
      DATE '2025-01-22' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-54' AS id,
      'demo' AS type,
      DATE '2025-01-12' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-55' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-56' AS id,
      'demo' AS type,
      DATE '2025-01-06' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-57' AS id,
      'call' AS type,
      DATE '2025-01-23' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-58' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-59' AS id,
      'call' AS type,
      DATE '2025-01-09' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-60' AS id,
      'email' AS type,
      DATE '2025-01-13' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-61' AS id,
      'meeting' AS type,
      DATE '2025-01-23' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-62' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-63' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-64' AS id,
      'call' AS type,
      DATE '2025-01-18' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-65' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-66' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-67' AS id,
      'meeting' AS type,
      DATE '2025-01-16' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-68' AS id,
      'email' AS type,
      DATE '2025-01-09' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-69' AS id,
      'demo' AS type,
      DATE '2025-01-05' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-70' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-71' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-72' AS id,
      'call' AS type,
      DATE '2025-01-24' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-73' AS id,
      'email' AS type,
      DATE '2025-01-28' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-74' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-75' AS id,
      'meeting' AS type,
      DATE '2025-01-11' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-76' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-77' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-78' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-79' AS id,
      'email' AS type,
      DATE '2025-01-08' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-80' AS id,
      'email' AS type,
      DATE '2025-01-13' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-81' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-82' AS id,
      'meeting' AS type,
      DATE '2025-01-30' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-83' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-84' AS id,
      'email' AS type,
      DATE '2025-01-07' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-85' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-86' AS id,
      'demo' AS type,
      DATE '2025-01-11' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-87' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-88' AS id,
      'meeting' AS type,
      DATE '2025-01-26' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-89' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-90' AS id,
      'email' AS type,
      DATE '2025-01-25' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-91' AS id,
      'meeting' AS type,
      DATE '2025-01-17' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-92' AS id,
      'demo' AS type,
      DATE '2025-01-16' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-93' AS id,
      'demo' AS type,
      DATE '2025-01-07' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-94' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-95' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-96' AS id,
      'meeting' AS type,
      DATE '2025-01-17' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-97' AS id,
      'meeting' AS type,
      DATE '2025-01-27' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-98' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-99' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-100' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-101' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-102' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-103' AS id,
      'demo' AS type,
      DATE '2025-01-13' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-104' AS id,
      'email' AS type,
      DATE '2025-01-23' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-105' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-106' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-107' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-108' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-109' AS id,
      'demo' AS type,
      DATE '2025-01-06' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-110' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-111' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-112' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-113' AS id,
      'call' AS type,
      DATE '2025-01-10' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-114' AS id,
      'email' AS type,
      DATE '2025-01-24' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-115' AS id,
      'call' AS type,
      DATE '2025-01-17' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-116' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-117' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-118' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-119' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-120' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-121' AS id,
      'demo' AS type,
      DATE '2025-01-02' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-122' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-123' AS id,
      'demo' AS type,
      DATE '2025-01-11' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-124' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-125' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-126' AS id,
      'call' AS type,
      DATE '2025-01-07' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-127' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-128' AS id,
      'call' AS type,
      DATE '2025-01-11' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-129' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-130' AS id,
      'email' AS type,
      DATE '2025-01-12' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-131' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-132' AS id,
      'call' AS type,
      DATE '2025-01-14' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-133' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-134' AS id,
      'email' AS type,
      DATE '2025-02-01' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-135' AS id,
      'email' AS type,
      DATE '2025-01-19' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-136' AS id,
      'call' AS type,
      DATE '2025-01-17' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-137' AS id,
      'meeting' AS type,
      DATE '2025-01-14' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-138' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-139' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-140' AS id,
      'email' AS type,
      DATE '2025-01-10' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-141' AS id,
      'call' AS type,
      DATE '2025-01-09' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-142' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-143' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-144' AS id,
      'meeting' AS type,
      DATE '2025-01-14' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-145' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-146' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-147' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-148' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-149' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-150' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-151' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-152' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-153' AS id,
      'call' AS type,
      DATE '2025-01-18' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-154' AS id,
      'call' AS type,
      DATE '2025-01-14' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-155' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-156' AS id,
      'meeting' AS type,
      DATE '2025-01-21' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-157' AS id,
      'meeting' AS type,
      DATE '2025-01-21' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-158' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-159' AS id,
      'demo' AS type,
      DATE '2025-01-09' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-160' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-161' AS id,
      'meeting' AS type,
      DATE '2025-01-21' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-162' AS id,
      'demo' AS type,
      DATE '2025-01-11' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-163' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-164' AS id,
      'call' AS type,
      DATE '2025-01-24' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-165' AS id,
      'demo' AS type,
      DATE '2025-01-14' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-166' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-167' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-168' AS id,
      'meeting' AS type,
      DATE '2025-01-24' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-169' AS id,
      'email' AS type,
      DATE '2025-01-31' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-170' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-171' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-172' AS id,
      'demo' AS type,
      DATE '2025-01-08' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-173' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-174' AS id,
      'call' AS type,
      DATE '2025-01-06' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-175' AS id,
      'email' AS type,
      DATE '2025-01-22' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-176' AS id,
      'email' AS type,
      DATE '2025-01-06' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-177' AS id,
      'meeting' AS type,
      DATE '2025-01-26' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-178' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-179' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-180' AS id,
      'demo' AS type,
      DATE '2025-01-28' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-181' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-182' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-183' AS id,
      'email' AS type,
      DATE '2025-01-24' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-184' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-185' AS id,
      'email' AS type,
      DATE '2025-01-28' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-186' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-187' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-188' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-189' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-190' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-191' AS id,
      'call' AS type,
      DATE '2025-01-20' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-192' AS id,
      'demo' AS type,
      DATE '2025-01-05' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-193' AS id,
      'demo' AS type,
      DATE '2025-01-07' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-194' AS id,
      'meeting' AS type,
      DATE '2025-01-21' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-195' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-196' AS id,
      'demo' AS type,
      DATE '2025-01-16' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-197' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-198' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-199' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-200' AS id,
      'call' AS type,
      DATE '2025-01-14' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-201' AS id,
      'email' AS type,
      DATE '2025-01-24' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-202' AS id,
      'email' AS type,
      DATE '2025-01-16' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-203' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-204' AS id,
      'call' AS type,
      DATE '2025-01-16' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-205' AS id,
      'call' AS type,
      DATE '2025-01-20' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-206' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-207' AS id,
      'email' AS type,
      DATE '2025-01-21' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-208' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-209' AS id,
      'email' AS type,
      DATE '2025-01-30' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-210' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-211' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-212' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-213' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-214' AS id,
      'demo' AS type,
      DATE '2025-01-12' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-215' AS id,
      'email' AS type,
      DATE '2025-01-18' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-216' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-217' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-218' AS id,
      'call' AS type,
      DATE '2025-01-16' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-219' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-220' AS id,
      'call' AS type,
      DATE '2025-01-23' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-221' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-222' AS id,
      'email' AS type,
      DATE '2025-02-01' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-223' AS id,
      'demo' AS type,
      DATE '2025-01-28' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-224' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-225' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-226' AS id,
      'email' AS type,
      DATE '2025-01-28' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-227' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-228' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-229' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-230' AS id,
      'email' AS type,
      DATE '2025-01-22' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-231' AS id,
      'call' AS type,
      DATE '2025-01-31' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-232' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-233' AS id,
      'demo' AS type,
      DATE '2025-01-23' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-234' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-235' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-236' AS id,
      'call' AS type,
      DATE '2025-01-27' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-237' AS id,
      'call' AS type,
      DATE '2025-01-12' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-238' AS id,
      'email' AS type,
      DATE '2025-01-13' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-239' AS id,
      'email' AS type,
      DATE '2025-01-25' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-240' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-241' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-242' AS id,
      'email' AS type,
      DATE '2025-01-16' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-243' AS id,
      'call' AS type,
      DATE '2025-01-16' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-244' AS id,
      'email' AS type,
      DATE '2025-01-16' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-245' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-246' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-247' AS id,
      'email' AS type,
      DATE '2025-01-31' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-248' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-249' AS id,
      'email' AS type,
      DATE '2025-01-19' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-250' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-251' AS id,
      'email' AS type,
      DATE '2025-01-21' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-252' AS id,
      'demo' AS type,
      DATE '2025-02-01' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-253' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-254' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-255' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-256' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-257' AS id,
      'meeting' AS type,
      DATE '2025-01-13' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-258' AS id,
      'demo' AS type,
      DATE '2025-01-17' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-259' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-260' AS id,
      'call' AS type,
      DATE '2025-01-14' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-261' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-262' AS id,
      'meeting' AS type,
      DATE '2025-01-23' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-263' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-264' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-265' AS id,
      'email' AS type,
      DATE '2025-01-16' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-266' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-267' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-268' AS id,
      'call' AS type,
      DATE '2025-01-19' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-269' AS id,
      'meeting' AS type,
      DATE '2025-01-30' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-270' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-271' AS id,
      'call' AS type,
      DATE '2025-01-24' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-272' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-273' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-274' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-275' AS id,
      'email' AS type,
      DATE '2025-01-25' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-276' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-277' AS id,
      'email' AS type,
      DATE '2025-01-08' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-278' AS id,
      'email' AS type,
      DATE '2025-01-08' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-279' AS id,
      'call' AS type,
      DATE '2025-01-29' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-280' AS id,
      'email' AS type,
      DATE '2025-01-25' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-281' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-282' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-283' AS id,
      'call' AS type,
      DATE '2025-01-13' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-284' AS id,
      'meeting' AS type,
      DATE '2025-01-09' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-285' AS id,
      'email' AS type,
      DATE '2025-01-10' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-286' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-287' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-288' AS id,
      'meeting' AS type,
      DATE '2025-01-24' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-289' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-290' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-291' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-292' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-293' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-294' AS id,
      'email' AS type,
      DATE '2025-01-22' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-295' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-296' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-297' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-298' AS id,
      'call' AS type,
      DATE '2025-01-29' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-299' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-300' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-301' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-302' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-303' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-304' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-305' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-306' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-307' AS id,
      'demo' AS type,
      DATE '2025-01-08' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-308' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-309' AS id,
      'meeting' AS type,
      DATE '2025-01-27' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-310' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-311' AS id,
      'email' AS type,
      DATE '2025-01-18' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-312' AS id,
      'email' AS type,
      DATE '2025-01-31' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-313' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-314' AS id,
      'demo' AS type,
      DATE '2025-01-17' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-315' AS id,
      'email' AS type,
      DATE '2025-01-31' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-316' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-317' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-318' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-319' AS id,
      'email' AS type,
      DATE '2025-01-30' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-320' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-321' AS id,
      'email' AS type,
      DATE '2025-01-30' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-322' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-323' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-324' AS id,
      'call' AS type,
      DATE '2025-01-31' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-325' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-326' AS id,
      'meeting' AS type,
      DATE '2025-01-10' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-327' AS id,
      'demo' AS type,
      DATE '2025-01-07' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-328' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-329' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-330' AS id,
      'meeting' AS type,
      DATE '2025-01-16' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-331' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-332' AS id,
      'call' AS type,
      DATE '2025-01-13' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-333' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-334' AS id,
      'call' AS type,
      DATE '2025-01-17' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-335' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-336' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-337' AS id,
      'meeting' AS type,
      DATE '2025-01-26' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-338' AS id,
      'email' AS type,
      DATE '2025-01-24' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-339' AS id,
      'call' AS type,
      DATE '2025-01-25' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-340' AS id,
      'meeting' AS type,
      DATE '2025-01-16' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-341' AS id,
      'call' AS type,
      DATE '2025-01-20' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-342' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-343' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-344' AS id,
      'email' AS type,
      DATE '2025-01-23' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-345' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-346' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-347' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-348' AS id,
      'demo' AS type,
      DATE '2025-01-28' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-349' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-350' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-351' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-26' AS prospect_id
    UNION ALL
    SELECT
      'a-352' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-353' AS id,
      'meeting' AS type,
      DATE '2025-01-18' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-354' AS id,
      'meeting' AS type,
      DATE '2025-01-14' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-355' AS id,
      'demo' AS type,
      DATE '2025-01-10' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-356' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-357' AS id,
      'email' AS type,
      DATE '2025-01-15' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-358' AS id,
      'meeting' AS type,
      DATE '2025-01-13' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-359' AS id,
      'meeting' AS type,
      DATE '2025-01-19' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-360' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-361' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-362' AS id,
      'demo' AS type,
      DATE '2025-01-14' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-363' AS id,
      'demo' AS type,
      DATE '2025-01-16' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-364' AS id,
      'meeting' AS type,
      DATE '2025-01-15' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-365' AS id,
      'meeting' AS type,
      DATE '2025-01-22' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-366' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-367' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-368' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-369' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-370' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-371' AS id,
      'email' AS type,
      DATE '2025-01-30' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-372' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-373' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-374' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-375' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-376' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-377' AS id,
      'email' AS type,
      DATE '2025-01-27' AS date,
      'p-26' AS prospect_id
    UNION ALL
    SELECT
      'a-378' AS id,
      'call' AS type,
      DATE '2025-01-29' AS date,
      'p-27' AS prospect_id
    UNION ALL
    SELECT
      'a-379' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-380' AS id,
      'call' AS type,
      DATE '2025-01-29' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-381' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-382' AS id,
      'meeting' AS type,
      DATE '2025-01-26' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-383' AS id,
      'meeting' AS type,
      DATE '2025-01-27' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-384' AS id,
      'call' AS type,
      DATE '2025-01-15' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-385' AS id,
      'meeting' AS type,
      DATE '2025-01-14' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-386' AS id,
      'demo' AS type,
      DATE '2025-01-12' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-387' AS id,
      'demo' AS type,
      DATE '2025-01-13' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-388' AS id,
      'meeting' AS type,
      DATE '2025-01-23' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-389' AS id,
      'call' AS type,
      DATE '2025-01-24' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-390' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-391' AS id,
      'demo' AS type,
      DATE '2025-01-14' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-392' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-393' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-394' AS id,
      'email' AS type,
      DATE '2025-01-19' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-395' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-396' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-397' AS id,
      'meeting' AS type,
      DATE '2025-01-28' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-398' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-399' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-400' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-401' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-402' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-403' AS id,
      'call' AS type,
      DATE '2025-01-29' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-404' AS id,
      'demo' AS type,
      DATE '2025-01-30' AS date,
      'p-26' AS prospect_id
    UNION ALL
    SELECT
      'a-405' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-27' AS prospect_id
    UNION ALL
    SELECT
      'a-406' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-28' AS prospect_id
    UNION ALL
    SELECT
      'a-407' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-408' AS id,
      'demo' AS type,
      DATE '2025-01-19' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-409' AS id,
      'email' AS type,
      DATE '2025-01-19' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-410' AS id,
      'demo' AS type,
      DATE '2025-01-20' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-411' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-412' AS id,
      'meeting' AS type,
      DATE '2025-02-01' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-413' AS id,
      'meeting' AS type,
      DATE '2025-01-17' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-414' AS id,
      'demo' AS type,
      DATE '2025-01-26' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-415' AS id,
      'call' AS type,
      DATE '2025-01-31' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-416' AS id,
      'email' AS type,
      DATE '2025-01-20' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-417' AS id,
      'meeting' AS type,
      DATE '2025-01-23' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-418' AS id,
      'meeting' AS type,
      DATE '2025-01-15' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-419' AS id,
      'email' AS type,
      DATE '2025-01-14' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-420' AS id,
      'call' AS type,
      DATE '2025-01-31' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-421' AS id,
      'call' AS type,
      DATE '2025-01-23' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-422' AS id,
      'demo' AS type,
      DATE '2025-01-18' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-423' AS id,
      'call' AS type,
      DATE '2025-01-26' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-424' AS id,
      'meeting' AS type,
      DATE '2025-01-24' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-425' AS id,
      'meeting' AS type,
      DATE '2025-01-24' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-426' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-427' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-428' AS id,
      'call' AS type,
      DATE '2025-01-30' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-429' AS id,
      'demo' AS type,
      DATE '2025-01-25' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-430' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-431' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-432' AS id,
      'meeting' AS type,
      DATE '2025-02-01' AS date,
      'p-26' AS prospect_id
    UNION ALL
    SELECT
      'a-433' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-27' AS prospect_id
    UNION ALL
    SELECT
      'a-434' AS id,
      'meeting' AS type,
      DATE '2025-01-30' AS date,
      'p-28' AS prospect_id
    UNION ALL
    SELECT
      'a-435' AS id,
      'call' AS type,
      DATE '2025-01-31' AS date,
      'p-29' AS prospect_id
    UNION ALL
    SELECT
      'a-436' AS id,
      'call' AS type,
      DATE '2025-01-14' AS date,
      'p-1' AS prospect_id
    UNION ALL
    SELECT
      'a-437' AS id,
      'email' AS type,
      DATE '2025-01-28' AS date,
      'p-2' AS prospect_id
    UNION ALL
    SELECT
      'a-438' AS id,
      'meeting' AS type,
      DATE '2025-01-06' AS date,
      'p-3' AS prospect_id
    UNION ALL
    SELECT
      'a-439' AS id,
      'meeting' AS type,
      DATE '2025-01-12' AS date,
      'p-4' AS prospect_id
    UNION ALL
    SELECT
      'a-440' AS id,
      'email' AS type,
      DATE '2025-01-19' AS date,
      'p-5' AS prospect_id
    UNION ALL
    SELECT
      'a-441' AS id,
      'demo' AS type,
      DATE '2025-01-29' AS date,
      'p-6' AS prospect_id
    UNION ALL
    SELECT
      'a-442' AS id,
      'demo' AS type,
      DATE '2025-01-28' AS date,
      'p-7' AS prospect_id
    UNION ALL
    SELECT
      'a-443' AS id,
      'demo' AS type,
      DATE '2025-01-11' AS date,
      'p-8' AS prospect_id
    UNION ALL
    SELECT
      'a-444' AS id,
      'email' AS type,
      DATE '2025-01-22' AS date,
      'p-9' AS prospect_id
    UNION ALL
    SELECT
      'a-445' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-10' AS prospect_id
    UNION ALL
    SELECT
      'a-446' AS id,
      'demo' AS type,
      DATE '2025-01-24' AS date,
      'p-11' AS prospect_id
    UNION ALL
    SELECT
      'a-447' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-12' AS prospect_id
    UNION ALL
    SELECT
      'a-448' AS id,
      'demo' AS type,
      DATE '2025-01-21' AS date,
      'p-13' AS prospect_id
    UNION ALL
    SELECT
      'a-449' AS id,
      'email' AS type,
      DATE '2025-01-17' AS date,
      'p-14' AS prospect_id
    UNION ALL
    SELECT
      'a-450' AS id,
      'meeting' AS type,
      DATE '2025-01-20' AS date,
      'p-15' AS prospect_id
    UNION ALL
    SELECT
      'a-451' AS id,
      'call' AS type,
      DATE '2025-01-21' AS date,
      'p-16' AS prospect_id
    UNION ALL
    SELECT
      'a-452' AS id,
      'demo' AS type,
      DATE '2025-01-22' AS date,
      'p-17' AS prospect_id
    UNION ALL
    SELECT
      'a-453' AS id,
      'call' AS type,
      DATE '2025-01-22' AS date,
      'p-18' AS prospect_id
    UNION ALL
    SELECT
      'a-454' AS id,
      'meeting' AS type,
      DATE '2025-01-25' AS date,
      'p-19' AS prospect_id
    UNION ALL
    SELECT
      'a-455' AS id,
      'meeting' AS type,
      DATE '2025-01-21' AS date,
      'p-20' AS prospect_id
    UNION ALL
    SELECT
      'a-456' AS id,
      'demo' AS type,
      DATE '2025-01-27' AS date,
      'p-21' AS prospect_id
    UNION ALL
    SELECT
      'a-457' AS id,
      'call' AS type,
      DATE '2025-01-27' AS date,
      'p-22' AS prospect_id
    UNION ALL
    SELECT
      'a-458' AS id,
      'email' AS type,
      DATE '2025-01-26' AS date,
      'p-23' AS prospect_id
    UNION ALL
    SELECT
      'a-459' AS id,
      'meeting' AS type,
      DATE '2025-01-29' AS date,
      'p-24' AS prospect_id
    UNION ALL
    SELECT
      'a-460' AS id,
      'meeting' AS type,
      DATE '2025-01-26' AS date,
      'p-25' AS prospect_id
    UNION ALL
    SELECT
      'a-461' AS id,
      'demo' AS type,
      DATE '2025-01-31' AS date,
      'p-26' AS prospect_id
    UNION ALL
    SELECT
      'a-462' AS id,
      'call' AS type,
      DATE '2025-01-28' AS date,
      'p-27' AS prospect_id
    UNION ALL
    SELECT
      'a-463' AS id,
      'email' AS type,
      DATE '2025-01-29' AS date,
      'p-28' AS prospect_id
    UNION ALL
    SELECT
      'a-464' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-29' AS prospect_id
    UNION ALL
    SELECT
      'a-465' AS id,
      'meeting' AS type,
      DATE '2025-01-31' AS date,
      'p-30' AS prospect_id )
  ORDER BY
    date,
    prospect_id
);

CREATE OR REPLACE VIEW prospects AS (
  SELECT
    *
  FROM (
    SELECT
      'p-1' AS id,
      'BrightSoft Systems' AS name,
      DATE '2025-01-01' AS date_in,
    UNION ALL
    SELECT
      'p-2' AS id,
      'NeoLogic Ventures' AS name,
      DATE '2025-01-02' AS date_in,
    UNION ALL
    SELECT
      'p-3' AS id,
      'QuantumLogic Systems' AS name,
      DATE '2025-01-03' AS date_in,
    UNION ALL
    SELECT
      'p-4' AS id,
      'DataStream Ventures' AS name,
      DATE '2025-01-04' AS date_in,
    UNION ALL
    SELECT
      'p-5' AS id,
      'QuantumPulse Networks' AS name,
      DATE '2025-01-05' AS date_in,
    UNION ALL
    SELECT
      'p-6' AS id,
      'NetOne Corp' AS name,
      DATE '2025-01-06' AS date_in,
    UNION ALL
    SELECT
      'p-7' AS id,
      'CloudPulse Corp' AS name,
      DATE '2025-01-07' AS date_in,
    UNION ALL
    SELECT
      'p-8' AS id,
      'NetPrime Group' AS name,
      DATE '2025-01-08' AS date_in,
    UNION ALL
    SELECT
      'p-9' AS id,
      'CloudEdge Systems' AS name,
      DATE '2025-01-09' AS date_in,
    UNION ALL
    SELECT
      'p-10' AS id,
      'TechStream Works' AS name,
      DATE '2025-01-10' AS date_in,
    UNION ALL
    SELECT
      'p-11' AS id,
      'InfoDrive Ventures' AS name,
      DATE '2025-01-11' AS date_in,
    UNION ALL
    SELECT
      'p-12' AS id,
      'BrightStream Corp' AS name,
      DATE '2025-01-12' AS date_in,
    UNION ALL
    SELECT
      'p-13' AS id,
      'BrightDrive Networks' AS name,
      DATE '2025-01-13' AS date_in,
    UNION ALL
    SELECT
      'p-14' AS id,
      'NextPrime Ventures' AS name,
      DATE '2025-01-14' AS date_in,
    UNION ALL
    SELECT
      'p-15' AS id,
      'NeoDrive Labs' AS name,
      DATE '2025-01-15' AS date_in,
    UNION ALL
    SELECT
      'p-16' AS id,
      'NeoDrive Ventures' AS name,
      DATE '2025-01-16' AS date_in,
    UNION ALL
    SELECT
      'p-17' AS id,
      'NeoOne Networks' AS name,
      DATE '2025-01-17' AS date_in,
    UNION ALL
    SELECT
      'p-18' AS id,
      'DataLogic Works' AS name,
      DATE '2025-01-18' AS date_in,
    UNION ALL
    SELECT
      'p-19' AS id,
      'DataPulse Corp' AS name,
      DATE '2025-01-19' AS date_in,
    UNION ALL
    SELECT
      'p-20' AS id,
      'NeoLink Labs' AS name,
      DATE '2025-01-20' AS date_in,
    UNION ALL
    SELECT
      'p-21' AS id,
      'InfoSpark Corp' AS name,
      DATE '2025-01-21' AS date_in,
    UNION ALL
    SELECT
      'p-22' AS id,
      'QuantumDrive Solutions' AS name,
      DATE '2025-01-22' AS date_in,
    UNION ALL
    SELECT
      'p-23' AS id,
      'NeoEdge Corp' AS name,
      DATE '2025-01-23' AS date_in,
    UNION ALL
    SELECT
      'p-24' AS id,
      'CloudLogic Labs' AS name,
      DATE '2025-01-24' AS date_in,
    UNION ALL
    SELECT
      'p-25' AS id,
      'NetEdge Labs' AS name,
      DATE '2025-01-25' AS date_in,
    UNION ALL
    SELECT
      'p-26' AS id,
      'NextEdge Solutions' AS name,
      DATE '2025-01-26' AS date_in,
    UNION ALL
    SELECT
      'p-27' AS id,
      'CloudPrime Partners' AS name,
      DATE '2025-01-27' AS date_in,
    UNION ALL
    SELECT
      'p-28' AS id,
      'TechPulse Partners' AS name,
      DATE '2025-01-28' AS date_in,
    UNION ALL
    SELECT
      'p-29' AS id,
      'InfoSoft Dynamics' AS name,
      DATE '2025-01-29' AS date_in,
    UNION ALL
    SELECT
      'p-30' AS id,
      'NetOne Labs' AS name,
      DATE '2025-01-30' AS date_in,
    UNION ALL
    SELECT
      'p-31' AS id,
      'QuantumDrive Solutions' AS name,
      DATE '2025-01-31' AS date_in )
  ORDER BY
    date_in,
    id
);

def front
  '1072-067-q4-notice-front'
end

def back
  '1072-067-q4-notice-back'
end

def needs_notice?
  true if is_city? && timestamp >= TimeUtil.parse_date('08/26/2022')
  && timestamp <= TimeUtil.parse_date('08/31/2022')
end

def is_city?
  @profile_is =~ /city/
end

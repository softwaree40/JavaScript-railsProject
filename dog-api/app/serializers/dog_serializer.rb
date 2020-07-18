class DogSerializer < ActiveModel::Serializer
  has_many :events
  attributes :id,:name,:age,:sex,:description,:status
end
